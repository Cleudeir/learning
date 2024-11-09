/* eslint-disable max-len */
import {TextInput, View, Text, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from '../../src/style/NoAuth/Login';
import {Context} from '../AppContexProvider';
import * as Google from 'expo-google-app-auth';
import {
  AND_CLIENT_ID,
  BACK_URL_INSERT_DB,
} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginGoogle({navigation}) {
  const ctx = useContext(Context);
  const [loading, setLoading] = useState(true);

  async function entrar() {
    setLoading(false);
    const config = {
      androidClientId: AND_CLIENT_ID,
      scopes: ['profile', 'email'],
    };
    try {
      const result = await Google.logInAsync(config);
      console.log('click', AND_CLIENT_ID);
      if (result.type === 'success') {
        const params = {...result.user, permission: '[0]'};
        AsyncStorage.setItem('USER', JSON.stringify(params));
        try {
          const insertMySql = await fetch(BACK_URL_INSERT_DB, {
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({params, tableName: 'USUARIOS'}),
          });
          console.log('insertMySql :', insertMySql, params);
          ctx.setUser(params);
        } catch (error) {
          setLoading(true);
          console.log('insertMySql Error:', error);
        }
      } else {
        setLoading(true);
        return {cancelled: true};
      }
    } catch (e) {
      setLoading(true);
      console.log(e);
      return {error: true};
    }
  }

  return (
    loading &&
    <View style={styles.container}>
      <Text style={styles.h1}>Bem vindo {'\n'} Faça seu Login!</Text>
      <TextInput
        style={styles.LoginInput}
        placeholder="E-mail"
        leftIcon={{type: 'font-awesome', name: 'envelope'}}
        onChangeText={(value) => setEmail(value)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.LoginInput}
        placeholder="Sua senha"
        leftIcon={{type: 'font-awesome', name: 'lock'}}
        onChangeText={(value) => setPasswd(value)}
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={() => entrar()}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
    </View>
  );
}
