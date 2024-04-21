import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation, signOut }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Health App</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SubscriptionDelivery')}>
        <Text style={styles.buttonText}>Medicine Delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EmergencyMedicine')}>
        <Text style={styles.buttonText}>Emergency Medicine</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AyurvedicTips')}>
        <Text style={styles.buttonText}>Ayurvedic Health Tips</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HealthGames')}>
        <Text style={styles.buttonText}>Health-Related Games</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={signOut}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f8',  // Light grey background
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333', // Dark grey text for better readability
  },
  button: {
    backgroundColor: '#6200EE', // Vibrant blue
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#FF6347',  // Tomato color for logout to stand out
  },
});

export default Home;
