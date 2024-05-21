import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

import { Users } from '../../DummyData';

export default function LoginPage({ setLoggedIn, setIsAdmin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const btnSigningClick = () => {
        let current_user = Users.find(user => username === user.username && password === user.password);
        if (current_user) {
            setLoggedIn(true);
            setIsAdmin(current_user.isAdmin);
        } else {
            alert("Username or Password incorrect");
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../Resources/logo.png')} style={styles.logo} />
            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.input} placeholder="Enter your username" onChangeText={setUsername} />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder='Enter your password' secureTextEntry onChangeText={setPassword} />
            <Button title="Sign in" onPress={btnSigningClick} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6A1F8',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotPassword: {
    color: 'blue',
  },
  signUp: {
    marginTop: 20,
  },
  signUpLink: {
    color: 'blue',
  },
});