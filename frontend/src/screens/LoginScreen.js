import React, { useState, useContext } from "react";
import {View, Text, Image, StyleSheet,ToastAndroid, TextInput, TouchableOpacity, } from "react-native";
import CustomInput from "../components/inputs/CustomInput.js";
import CustomButton from "../components/buttons/CustomButton.js";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login, loading } = useContext(AuthContext);

  const handleLogin = async () => {
    if (!email || !password) {
      ToastAndroid.show(
        "Por favor ingresa correo y contraseña",
        ToastAndroid.SHORT
      );
      return;
    }

    const success = await login(email, password);
    if (success) {
      ToastAndroid.show("Inicio de sesión exitoso", ToastAndroid.SHORT);
      // No navegamos manualmente: Navigation cambiará automáticamente
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Salesianos_Ricaldone.png",
        }}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>BIENVENIDO AL</Text>
      <Text style={styles.title}>SISTEMA DE ASISTENCIA ITR</Text>
      <Text style={styles.subtitle}>
        Ingresa tus credenciales para acceder al sistema
      </Text>

      <CustomInput
        label="Correo electrónico institucional"
        placeholder="usuario@ricaldone.edu.sv"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="********"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.showButton}
          >
            <Text style={styles.showButtonText}>
              {showPassword ? "Ocultar" : "Mostrar"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <CustomButton
        title={loading ? "Cargando..." : "INICIAR SESIÓN"}
        onPress={handleLogin}
        disabled={loading}
      />

      <Text style={styles.footer}>
        Desarrollado por los estudiantes de 3er año de la especialidad de{" "}
        <Text style={styles.footerHighlight}>Desarrollo de software</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    marginVertical: 10,
  },
  inputWrapper: {
    width: "100%",
    marginVertical: 10,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  passwordInputContainer: {
    position: "relative",
    justifyContent: "center",
  },
  passwordInput: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 60, 
    fontSize: 16,
  },
  showButton: {
    position: "absolute",
    right: 10,
    height: "100%",
    justifyContent: "center",
  },
  showButtonText: {
    color: "#007BFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  footer: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 12,
    color: "#555",
  },
  footerHighlight: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});
