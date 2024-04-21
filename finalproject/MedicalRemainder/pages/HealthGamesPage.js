import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HealthGamesPage = () => {
  return (
    <View style={styles.container}>
      <Text>Engage with health-related games to encourage a healthy lifestyle.</Text>
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

export default HealthGamesPage;
