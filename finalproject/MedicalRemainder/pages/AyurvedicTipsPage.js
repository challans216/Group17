import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AyurvedicTipsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Explore Ayurvedic health tips to improve your wellbeing.</Text>
      <Button title="Go to Health Games" onPress={() => navigation.navigate('HealthGames')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AyurvedicTipsPage;
