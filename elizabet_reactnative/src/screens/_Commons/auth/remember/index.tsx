import React from 'react';
import {Pressable, TextInput, View} from 'react-native';
import {Text} from 'react-native-paper';
import ContainerScreen from '../../../../components/ContainerScreen';
import globalStyle from '../../../../styles/Fontes';
import {PropsRemember} from '../../../Interface';
import useIndex from './useIndex';

const RememberScreen: React.FC<PropsRemember> = ({
  route,
  navigation,
}): JSX.Element => {
  //console.log('routeRemember: ', route);
  const {handle, isMessage, isLoading, setMessage, email, setEmail} = useIndex({
    navigation,
    route,
  });

  return (
    <ContainerScreen
      isLoading={isLoading}
      isMessage={isMessage}
      setMessage={setMessage}>
      <View style={globalStyle.container}>
        <Text style={globalStyle.h85}>Esqueceu a senha?</Text>
        <Text style={globalStyle.h50}>
          Informe um e-mail para receber instruções de recuperação da senha
        </Text>
        <View style={globalStyle.form}>
          <Text style={globalStyle.label}>E-mail</Text>
          <TextInput
            style={globalStyle.input}
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <Pressable style={globalStyle.ButtonContainer} onPress={handle}>
          <Text style={globalStyle.ButtonText}>Enviar</Text>
        </Pressable>
        <View style={globalStyle.containerTextBottom}>
          <Text style={globalStyle.h35}>Lembrou a senha?</Text>
          <Pressable
            style={globalStyle.center}
            onPress={() => {
              navigation.navigate('Login', {...route.params});
            }}>
            <Text style={[globalStyle.h40, globalStyle.Bold]}>Entrar</Text>
          </Pressable>
        </View>
      </View>
    </ContainerScreen>
  );
};

export default RememberScreen;
