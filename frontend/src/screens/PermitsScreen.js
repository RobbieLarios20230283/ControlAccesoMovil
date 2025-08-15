import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Modal, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/inputs/SearchBar';
import PermissionButton from '../components/buttons/PermissionButton';
import PermissionItem from '../components/PermissionItem';
import CreatePermissionForm from '../components/forms/CreatePermission'; 

const permisosData = [
  { id: '1', title: 'Permiso 28 de Junio' },
  { id: '2', title: 'Permiso 28 de Junio' },
];

const PermitsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const filteredPermisos = permisosData.filter(p =>
    p.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleCreatePermission = async (formData) => {
    try {
      const res = await fetch('https://tu-api.com/api/permissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer TU_TOKEN', // aquí pones el token real
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        Alert.alert('Éxito', 'Permiso creado correctamente');
        setModalVisible(false);
      } else {
        Alert.alert('Error', data.message || 'No se pudo crear el permiso');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un problema al enviar el permiso');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Historial de permisos</Text>
        <SearchBar
          placeholder="Busca llegadas por fecha"
          value={searchText}
          onChangeText={setSearchText}
        />
        <PermissionButton onPress={() => setModalVisible(true)} />
        
        <Text style={styles.subtitle}>Mis permisos:</Text>
        <FlatList
          data={filteredPermisos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PermissionItem title={item.title} />}
          style={{ marginTop: 10 }}
        />

        {/* Modal para crear nuevo permiso */}
        <Modal visible={modalVisible} animationType="slide">
          <CreatePermissionForm
            onCancel={() => setModalVisible(false)}
            onSubmit={handleCreatePermission}
          />
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f7f7f7' },
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  subtitle: { marginTop: 24, marginBottom: 8, fontWeight: '600' },
});

export default PermitsScreen;
