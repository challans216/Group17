import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Login = ({ signIn }) => {
  return (
    <View style={styles.container}>
      <Button title="Log In" onPress={signIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
