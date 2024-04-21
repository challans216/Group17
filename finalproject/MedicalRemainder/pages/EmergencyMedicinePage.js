import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const EmergencyMedicinePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Find emergency medicine suggestions here.</Text>
      <Button title="Go to Ayurvedic Tips" onPress={() => navigation.navigate('AyurvedicTips')} />
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

export default EmergencyMedicinePage;
