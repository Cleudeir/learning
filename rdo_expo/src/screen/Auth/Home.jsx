import {View, ScrollView, Button, Text} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {Context} from '../../../AppContextProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from '../../genericPages/styles';
import ButtonPress from '../../components/ButtonPress';
import Firebase from '../../class/Firebase';
import ScrollContainer from '../../components/ScrollContainer';
import Mysql from '../../class/Mysql';
import Box from '../../genericPages/Box';

export default function Home({navigation}) {
  const ctx = useContext(Context);
  const [useGestorGeral, setGestorGeral] = useState(false);
  const [useGestorObra, setGestorObra] = useState(false);
  const [useLoading, setLoading] = useState(false);
  const [useError, setError] = useState(false);

  function deslogar() {
    ctx.setUser( false );
    AsyncStorage.removeItem('user');
    Firebase.deslogar();
  }

  useEffect(()=>{
    start();
    navigation.addListener('focus', start);
    async function start() {
      console.log('TRY START');
      const obras = await Mysql.read('OBRAS');
      if (obras.sqlMessage) {
        setError(obras.sqlMessage);
        console.log(obras.sqlMessage);
        setTimeout(() => {
          start();
        }, 5000);
        return;
      }
      const usuarios = await Mysql.readAllIncludes('USUARIOS', 'USUARIOS_OBRAS', ['obraId']);
      if (usuarios.sqlMessage) {
        setError(usuarios.sqlMessage);
        console.log(usuarios.sqlMessage);
        setTimeout(() => {
          start();
        }, 5000);
        return;
      }
      const frentes = await Mysql.read('FRENTES');
      if (frentes.sqlMessage) {
        setError(frentes.sqlMessage);
        console.log(frentes.sqlMessage);
        setTimeout(() => {
          start();
        }, 5000);
        return;
      }
      ctx.setObras(obras);
      ctx.setUsuarios(usuarios);
      ctx.setFrentes(frentes);
      console.log({user: ctx.user, obras, usuarios, frentes});

      setError(false);
      setLoading(true);
    }
  }, [navigation]);
  /*
  Permissão:
  0-GestorGeral: (Gerencia permissão de acesso de gerentes e add obras)
  1-Gerencia (Gerencia permissão de acesso, acesso aos relatórios)
  2-Administrativo (Cadastra funcionário, empresa e equipamentos)
  3-Apontador (Cria rdos de equipamentos e funcionários)
  */


  useEffect(() => {
    console.log(ctx.user);
    if (ctx && ctx.user && ctx.user.permissao) {
      const permissao = ctx.user.permissao;
      console.log(permissao);
      if (permissao.includes('0')) {
        setGestorGeral(true);
      } else if (permissao.includes('1')) {
        setGestorObra(true);
      }
      if (ctx && ctx.obras && ctx.usuarios) {
        setGestorObra(true);
      }
    }
  }, [ctx.user]);

  return (
    <ScrollContainer style={styles.container} useLoading={useLoading}>
      {useGestorGeral && <Box navigation={navigation}
        params={
          {title: 'GESTOR GERAL',
            itens: [
              {
                name: 'obras',
                icon: 'map-marker-radius-outline',
                screen: 'Ativas',
              },
              {
                name: 'frentes',
                icon: 'map-clock-outline',
                screen: 'Ativas',
              },
              {
                name: 'escopo',
                icon: 'map-clock-outline',
                screen: 'escopo',
              },
            ]}
        }/>
      }
      {useGestorObra && <Box navigation={navigation}
        params={
          {title: 'GESTOR OBRAS',
            itens: [
              {
                name: 'obras',
                icon: 'map-marker-radius-outline',
                screen: 'Ativas',
              },
              {
                name: 'frentes',
                icon: 'map-clock-outline',
                screen: 'Ativas',
              },

            ]}
        }/>
      }

      {ctx.user && <Box navigation={navigation}
        params={
          {title: 'CONFIGURAÇÕES',
            itens: [
              {
                name: 'usuarios',
                icon: 'account-outline',
                screen: 'Ativas',
              },
            ]}
        }/>
      }
      <ButtonPress
        onPress={deslogar}
        title="Deslogar"
      />
      {useError &&
       <Text
         style={{alignSelf: 'flex-start', color: 'red', fontSize: 12}}>
         {String(useError)}
       </Text>
      }
    </ScrollContainer>
  );
}

