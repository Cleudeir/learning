import React from 'react';
import {Pressable, TextInput, View} from 'react-native';
import {Text} from 'react-native-paper';
import ContainerScreen from '../../../../components/ContainerScreen';
import globalStyle from '../../../../styles/Fontes';
import {PropsLogin} from '../../../Interface';
import useIndex from './useIndex';

const LoginScreen: React.FC<PropsLogin> = ({
  route,
  navigation,
}): JSX.Element => {
  const {
    onSignUpPress,
    onRemember,
    handleLogin,
    isMessage,
    isLoading,
    password,
    setPassword,
    email,
    setEmail,
    setMessage,
  } = useIndex({route, navigation});

  return (
    <ContainerScreen
      isLoading={isLoading}
      isMessage={isMessage}
      setMessage={setMessage}>
      <View style={globalStyle.container}>
        <Text style={globalStyle.h85}>Olá, bem-vindo</Text>
        <Text style={globalStyle.h50}>Boa sorte em seus palpites</Text>
        <View style={globalStyle.form}>
          <Text style={globalStyle.label}>E-mail</Text>
          <TextInput
            inputMode="email"
            style={globalStyle.input}
            onChangeText={setEmail}
            value={email}
          />
          <Text style={globalStyle.label}>Senha</Text>
          <TextInput
            style={globalStyle.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <Pressable style={globalStyle.right} onPress={onRemember}>
            <Text style={globalStyle.h35}>Esqueci a senha</Text>
          </Pressable>
        </View>
        <Pressable style={globalStyle.ButtonContainer} onPress={handleLogin}>
          <Text style={globalStyle.ButtonText}>Entrar</Text>
        </Pressable>
        <View style={globalStyle.containerTextBottom}>
          <Text style={globalStyle.h35}>Não tem conta?</Text>
          <Pressable style={globalStyle.center} onPress={onSignUpPress}>
            <Text style={[globalStyle.h40, globalStyle.Bold]}>Criar conta</Text>
          </Pressable>
        </View>
      </View>
    </ContainerScreen>
  );
};

export default LoginScreen;
