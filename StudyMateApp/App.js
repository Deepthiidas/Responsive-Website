console.log("✅ App.js is running!");
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { firebase } from './firebase'; // Import the firebase configuration from firebase.js

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Sign up function
  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('User signed up!');
      alert('User signed up successfully');
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  // Login function
  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in!');
      alert('User logged in successfully');
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up / Login</Text>
      
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
      />
      
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
});
