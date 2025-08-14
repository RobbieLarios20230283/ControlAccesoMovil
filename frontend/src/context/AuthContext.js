import React, { createContext, useState, useCallback, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

export const AuthContext = createContext({
  user: null,
  authToken: null,
  loading: false,
  login: async () => {},
  logout: async () => {},
  API: "",
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = "http://192.168.1.2:3000/api";

  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          setAuthToken(token);
          // Opcional: cargar datos usuario aquí si guardas en AsyncStorage
        }
      } catch (error) {
        console.error("Error al cargar token:", error);
      }
    };
    loadToken();
  }, []);

  const clearSession = async () => {
    await AsyncStorage.removeItem("token");
    setUser(null);
    setAuthToken(null);
  };

  const logout = useCallback(async () => {
    try {
      await fetch(`${API_URL}/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Error durante logout:", error);
    } finally {
      await clearSession();
      ToastAndroid.show("Sesión cerrada correctamente", ToastAndroid.SHORT);
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem("token", data.token);
        setAuthToken(data.token);
        setUser(data.fullName || data.userName || null);
        ToastAndroid.show("Inicio de sesión exitoso", ToastAndroid.SHORT);
        return true;
      } else {
        ToastAndroid.show(
          data.message || "Error al iniciar sesión",
          ToastAndroid.SHORT
        );
        return false;
      }
    } catch (error) {
      console.error("Error durante login:", error);
      ToastAndroid.show(
        "Error de conexión con el servidor",
        ToastAndroid.SHORT
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authToken,
        loading,
        login,
        logout,
        API: API_URL,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
