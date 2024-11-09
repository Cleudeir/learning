/* eslint-disable max-len */
import {TextInput, View, Text, Pressable, LogBox} from 'react-native';
import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../../../AppContextProvider';
import Firebase from '../../class/Firebase';
import Mysql from '../../class/Mysql';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {global} from '../../style/global';
import {keyEncryption} from '../../../env';
import CryptoJS from 'crypto-js';
import {Dimensions, Platform} from 'react-native';

export default function Login({navigation}) {
  const ctx = useContext(Context);
  const [useEmail, setEmail] = useState('teste@test.com');
  const [useError, setError] = useState(false);
  const [usePassword, setPassword] = useState('123123');

  async function entrar() {
    console.log('click');
    if (useEmail, usePassword) {
      const userFirebase = await Firebase.signInUserEmail(useEmail, usePassword);
      const {uid} = userFirebase;
      if (!uid) {
        console.log('data: ', userFirebase);
        return setError(JSON.stringify(userFirebase));
      }
      const data = await Mysql.readPKIncludes('USUARIOS', uid, 'USUARIOS_OBRAS' );
      if (data.sqlMessage) {
        Firebase.deslogar();
        return setError(JSON.stringify(data));
      }
      console.log(data);
      if (data.length === 0) {
        Firebase.deslogar();
        return setError('Usuário não encontrado ou senha incorreta');
      }
      if (data.situacao.toUpperCase() === 'ATIVA') {
        const user = JSON.stringify({
          time: Date.now(),
          user: data,
        });
        if (Platform.OS === 'web') {
          const ciphertext = CryptoJS.AES.encrypt(user, keyEncryption).toString();
          AsyncStorage.setItem('001425', ciphertext);
          ctx.setUser(data);
        } else {
          AsyncStorage.setItem('001425', user);
          ctx.setUser(data);
        }
      } else {
        return setError('Conta desativada');
      }
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.containerBox}>
        <Text style={styles.h1}>Bem vindo !</Text>
        <TextInput
          style={styles.LoginInput}
          placeholder="E-mail"
          leftIcon={{type: 'font-awesome', name: 'envelope'}}
          onChangeText={(value) => setEmail(value)}
          keyboardType="email-address"
          value={useEmail.toString()}
        />
        <TextInput
          style={styles.LoginInput}
          placeholder="Sua senha"
          leftIcon={{type: 'font-awesome', name: 'lock'}}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
          value={usePassword.toString()}
        />
        {useError && <Text style={{color: 'red', fontSize: 10}}>{useError}</Text>}
        <Pressable style={styles.button} onPress={() => entrar()}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: global.container,
  h1: {
    marginBottom: 50,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: global.backGround,
    height: 50,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: global.text,
  },
  text: {color: 'blue'},
  LoginInput: {
    fontSize: 14,
    borderColor: global.backGround,
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
    margin: 5,
    width: global.width -50,
  },
  containerBox: {
    backgroundColor: global.text,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
