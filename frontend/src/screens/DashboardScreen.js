import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DayCard from '../components/widget/DayCard';
import ProgressCircle from '../components/widget/ProgressCircle';

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Hola Luisa, ¿Qué deseas hacer hoy?</Text>
        <DayCard dayName="Lunes" dayNumber={29} />
        <ProgressCircle 
          progress={0.3} 
          label="Completado!" 
          description="Mi progreso en el año lectivo 2025!"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eee', // para que el fondo cubra todo    
  },
  container: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
