import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SubscriptionDeliveryPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Manage your subscriptions and track deliveries here.</Text>
      <Button title="Go to Emergency Medicine" onPress={() => navigation.navigate('EmergencyMedicine')} />
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

export default SubscriptionDeliveryPage;
