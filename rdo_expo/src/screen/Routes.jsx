/* eslint-disable max-len */

import React, {useContext, useEffect, useState} from 'react';
import Login from './noAuth/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Auth/Home';
import {Context} from '../../AppContextProvider';
import {LogBox, View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet} from 'react-native';
import {global} from '../style/global';
import CryptoJS from 'crypto-js';
import Firebase from '../class/Firebase';
import Inativas from '../genericPages/Inativas';
import Ativas from '../genericPages/Ativas';
import Obras from './Auth/permission/GestorGeral/Obras';
import Usuarios from './Auth/permission/Configuracao/Usuarios';
import CadastroFrente from './Auth/permission/GestorObra/Frentes';
import Escopo from './Auth/permission/GestorObra/Escopo';
import {keyEncryption} from '../../env';
import {Platform} from 'react-native';
const Stack = createNativeStackNavigator();


function NoAuth() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
}
function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Ativas" component={Ativas} />
      <Stack.Screen name="Inativas" component={Inativas} />

      <Stack.Screen name="usuarios" component={Usuarios} />
      <Stack.Screen name="obras" component={Obras} />

      <Stack.Screen name="frentes" component={CadastroFrente} />
      <Stack.Screen name="escopo" component={Escopo} />

    </Stack.Navigator>
  );
}
// AsyncStorage.removeItem('USER');

export default function Routes() {
  LogBox.ignoreAllLogs();
  const ctx = useContext(Context);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const userFirebase = await Firebase._start();
      const remenber = await AsyncStorage.getItem('001425');
      if (!remenber) {
        return setLoading(true);
      }
      // Decrypt
      let data;
      console.log(Platform.OS);
      if (Platform.OS === 'web') {
        const bytes = CryptoJS.AES.decrypt(remenber, keyEncryption);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        console.log(originalText);
        data = await JSON.parse( originalText);
      } else {
        data = await JSON.parse(remenber);
        console.log(remenber);
      }
      const {user, time} = data;
      if (user, time) {
        const now = Date.now();
        ctx.setUser(user);
        console.log(now && (now - time), 2*24*60*60*1000);
        if (now && (now - time)>14*24*60*60*1000) {
          AsyncStorage.removeItem('001425');
          Firebase.deslogar();
          ctx.setUser(false);
        }
      }
      setLoading(true);
    })();
  }, []);


  return (
    loading ?
      <>
        {ctx.user && <Auth/>}
        {!ctx.user && <NoAuth />}
      </> :
      <View style={styles.container} />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.page,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'black',
  },
});


