import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/inputs/SearchBar';
import PermissionButton from '../components/buttons/PermissionButton';
import PermissionItem from '../components/PermissionItem';

const permisosData = [
  { id: '1', title: 'Permiso 28 de Junio' },
  { id: '2', title: 'Permiso 28 de Junio' },
];

const PermitsScreen = () => {
  const [searchText, setSearchText] = useState('');

  // Filtrar permisos según búsqueda
  const filteredPermisos = permisosData.filter(p =>
    p.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Historial de permisos</Text>
        <SearchBar
          placeholder="Busca llegadas por fecha"
          value={searchText}
          onChangeText={setSearchText}
        />
        <PermissionButton onPress={() => alert('Enviar nuevo permiso')} />
        
        <Text style={styles.subtitle}>Mis permisos:</Text>

        <FlatList
          data={filteredPermisos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PermissionItem title={item.title} />}
          style={{ marginTop: 10 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f7f7', // mismo color que el fondo
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    marginTop: 24,
    marginBottom: 8,
    fontWeight: '600',
  },
});

export default PermitsScreen;
