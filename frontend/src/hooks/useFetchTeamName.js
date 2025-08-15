import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchTeamName = (teamId) => {
  const [teamName, setTeamName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // para cancelar la actualización si el componente se desmonta

    if (!teamId) {
      setTeamName("Sin equipo");
      setLoading(false);
      return;
    }

    const fetchTeamName = async () => {
      try {
        const res = await axios.get(`http://192.168.1.2:3000/api/teams/${teamId}`);
        if (isMounted) setTeamName(res.data?.name || "Sin equipo");
      } catch (err) {
        console.error("Error al obtener el nombre del equipo", err);
        if (isMounted) setTeamName("Error al cargar");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchTeamName();

    return () => {
      isMounted = false;
    };
  }, [teamId]);

  return { teamName, loading };
};
