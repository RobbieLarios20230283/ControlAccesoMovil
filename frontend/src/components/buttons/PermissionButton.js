import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // o react-native-vector-icons/AntDesign

const PermissionButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.circle}>
        <AntDesign name="filetext1" size={48} color="#000" />
      </View>
      <Text style={styles.text}>Envía un nuevo permiso</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 24,
    alignItems: 'center',
  },
  circle: {
    backgroundColor: '#fff',
    borderRadius: 100,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  text: {
    marginTop: 12,
    fontSize: 14,
    color: '#555',
  },
});

export default PermissionButton;
