import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageCard = ({ title, experience, logo }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: logo }} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.experience}>{experience}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  experience: {
    fontSize: 14,
    color: '#555',
  },
});

export default LanguageCard;
