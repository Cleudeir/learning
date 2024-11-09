import React from 'react';
import {Linking, Pressable, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import ContainerScreen from '../../../../components/ContainerScreen';
import globalStyle from '../../../../styles/Fontes';
import {PropsSignUp} from '../../../Interface';
import useIndex from './useIndex';

const SignUpScreen: React.FC<PropsSignUp> = ({
  route,
  navigation,
}): JSX.Element => {
  //console.log('routeSing: ', route);
  const {
    handleSingUp,
    isMessage,
    isLoading,
    setMessage,
    password,
    setPassword,
    email,
    setEmail,
    pixKey,
    setPixKey,
    setPasswordConfirm,
    passwordConfirm,
  } = useIndex({navigation, route});

  return (
    <ContainerScreen
      isLoading={isLoading}
      isMessage={isMessage}
      setMessage={setMessage}>
      <View style={globalStyle.container}>
        <Text style={globalStyle.h85}>Olá, novo por aqui?</Text>
        <Text style={globalStyle.h50}>Crie sua conta e comece a palpitar</Text>
        <View style={globalStyle.form}>
          <Text style={globalStyle.label}>E-mail</Text>
          <TextInput
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
          <Text style={globalStyle.label}>Confirmar Senha</Text>
          <TextInput
            style={globalStyle.input}
            onChangeText={setPasswordConfirm}
            value={passwordConfirm}
            secureTextEntry
          />
          <Text style={globalStyle.label}>Chave PIX</Text>
          <TextInput
            style={globalStyle.input}
            onChangeText={setPixKey}
            value={pixKey}
          />
        </View>
        <View style={globalStyle.containerTextBottom}>
          <Text style={globalStyle.h35}>Ao criar a conta, concordo com o</Text>
          <TouchableOpacity
            style={globalStyle.center}
            onPress={() =>
              Linking.openURL('https://cleudeir.github.io/elizaBet_termo/')
            }>
            <Text style={[globalStyle.h40, globalStyle.Bold]}>
              Termo de uso
            </Text>
          </TouchableOpacity>
        </View>
        <Pressable style={globalStyle.ButtonContainer} onPress={handleSingUp}>
          <Text style={globalStyle.ButtonText}>Criar Conta</Text>
        </Pressable>
        <View style={globalStyle.containerTextBottom}>
          <Text style={globalStyle.h35}>Já tem conta?</Text>
          <Pressable
            style={globalStyle.center}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={[globalStyle.h40, globalStyle.Bold]}>Acessar</Text>
          </Pressable>
        </View>
      </View>
    </ContainerScreen>
  );
};

export default SignUpScreen;
