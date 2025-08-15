import { useState, useEffect } from "react";
import axios from "axios";

export default function useUserProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://192.168.1.2:3000/api/profile", {
          withCredentials: true, // importante para que envíe cookies
        });

        if (isMounted) {
          const data = res.data;

          // Asegurarse de que photo y fullName existan
          const profileData = {
            ...data,
            fullName: data.fullName || `${data.names || ""} ${data.surnames || ""}`,
            photo: data.photo || "https://i.pravatar.cc/150",
          };

          setProfile(profileData);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.response?.data?.message || "Error cargando perfil");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  return { profile, loading, error };
}
