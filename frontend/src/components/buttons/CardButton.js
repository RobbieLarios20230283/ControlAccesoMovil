// CardButton.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CardButton = ({ icon, text, onPress }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.circle} onPress={onPress}>
        {icon}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginVertical: 20,
  },
  circle: {
    width: 150,
    height: 150,
    backgroundColor: '#f7f7f7',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  button: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
    minWidth: 180,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
});

export default CardButton;
