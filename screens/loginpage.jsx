import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Handle successful sign-up
        console.log('User signed up successfully:', userCredential.user);
      })
      .catch(error => {
        // Handle sign-up errors
        console.error('Sign-up failed:', error.message);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
