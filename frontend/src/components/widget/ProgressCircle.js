// components/ProgressCircle.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Circle } from 'react-native-progress'; // librería para progreso circular

export default function ProgressCircle({ progress, label, description }) {
  return (
    <View style={styles.card}>
      <Circle
        size={150}
        progress={progress}
        thickness={12}
        color="#0a4ebc"
        unfilledColor="#ccc"
        borderWidth={0}
        showsText={false}
      />
      <View style={styles.textContainer}>
        <Text style={styles.percentage}>{Math.round(progress * 100)}%</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  textContainer: {
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  percentage: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  description: {
    marginTop: 12,
    fontSize: 12,
    color: '#555',
  },
});
