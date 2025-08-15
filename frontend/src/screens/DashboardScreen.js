import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DayCard from '../components/widget/DayCard';
import ProgressCircle from '../components/widget/ProgressCircle';
import useUserProfile from '../hooks/useFetchProfile';

export default function DashboardScreen() {
  const { profile, loading, error } = useUserProfile();

  if (loading) return <Text>Cargando perfil...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          Hola {profile.fullName}, ¿Qué deseas hacer hoy?
        </Text>
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
    backgroundColor: '#eee',
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
