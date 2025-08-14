// components/DayCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DayCard({ dayName, dayNumber }) {
  return (
    <View style={styles.card}>
      <Text style={styles.dayName}>{dayName}</Text>
      <Text style={styles.dayNumber}>{dayNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  dayName: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
  },
  dayNumber: {
    fontWeight: 'bold',
    fontSize: 42,
    color: '#888',
  },
});
