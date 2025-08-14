import React, { useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import LogoutButton from "../components/buttons/LogoutButton";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await logout();

      Alert.alert(
        "Sesión cerrada",
        "Se cerró sesión con éxito",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.reset({
                index: 0,
                routes: [{ name: "Login" }],
              });
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      Alert.alert("Error", "No se pudo cerrar sesión, intenta de nuevo.");
    }
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        Platform.OS === "android" && { paddingTop: StatusBar.currentHeight },
      ]}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Mi perfil</Text>

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=47" }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Ruth Geraldine Fuentes Ramirez</Text>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Nombres y Apellidos:</Text>
          <TextInput
            style={styles.input}
            value="Ruth Geraldine Fuentes Ramirez"
            editable={false}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Departamento laboral:</Text>
          <TextInput style={styles.input} value="Area Tecnica" editable={false} />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Código de empleado:</Text>
          <TextInput style={styles.input} placeholder="" />
        </View>
      </ScrollView>

      <LogoutButton onPress={handleLogout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 20, paddingBottom: 0 },
  title: { fontSize: 20, marginBottom: 20, fontWeight: "600" },
  imageContainer: { alignItems: "center", marginBottom: 25 },
  profileImage: { width: 120, height: 120, borderRadius: 60, backgroundColor: "#ddd" },
  name: { marginTop: 10, textAlign: "center", fontSize: 14, color: "#555" },
  formGroup: { marginBottom: 15 },
  label: { marginBottom: 5, color: "#333" },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    fontSize: 14,
  },
});

export default ProfileScreen;
