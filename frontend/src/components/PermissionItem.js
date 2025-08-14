import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // o react-native-vector-icons/MaterialCommunityIcons

const PermissionItem = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dot} />
      <MaterialCommunityIcons name="email" size={24} color="#000" style={{ marginRight: 10 }} />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#1976D2',
    borderRadius: 5,
    marginRight: 12,
  },
});

export default PermissionItem;
