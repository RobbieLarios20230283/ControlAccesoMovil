import React from "react";
import { View, ActivityIndicator, StyleSheet, Image } from "react-native";

const SplashScreen = () => {
  // Aquí solo muestras un loader, no navegas manualmente
  return (
    <View style={styles.container}>
      <Image
        source={require("../img/image.png")} 
        style={styles.logo}
        resizeMode="contain"
      />
      <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", 
  },
  logo: {
    width: 150,
    height: 150,
  },
});
