import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const CreatePermission = ({ onCancel, onSubmit }) => {
  const [permissionType, setPermissionType] = useState('');
  const [department, setDepartment] = useState('');
  const [applicationDay, setApplicationDay] = useState('');

  const handleSubmit = () => {
    if (!permissionType || !department || !applicationDay) {
      alert('Completa todos los campos obligatorios');
      return;
    }

    onSubmit({
      permissionType,
      department,
      applicationDay,
      Discount: false,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nuevo Permiso</Text>

      <Text style={styles.label}>Tipo de permiso</Text>
      <TextInput
        style={styles.input}
        placeholder="minor / major / incapacity"
        value={permissionType}
        onChangeText={setPermissionType}
      />

      <Text style={styles.label}>Departamento</Text>
      <TextInput
        style={styles.input}
        value={department}
        onChangeText={setDepartment}
      />

      <Text style={styles.label}>Día de solicitud</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={applicationDay}
        onChangeText={setApplicationDay}
      />

      <View style={styles.buttons}>
        <Button title="Cancelar" onPress={onCancel} color="#888" />
        <Button title="Guardar" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  label: { marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 6,
    marginTop: 5,
  },
  buttons: { marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' },
});

export default CreatePermission;
