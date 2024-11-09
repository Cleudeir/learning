import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {useState} from 'react';
import request from '../../../../api/request';
import useAppContext from '../../../../context';
import {backEndUrl} from '../../../../env';
import passwordValidation from '../../../../validations/passwordValidation';
import {PropsSignUp} from '../../../Interface';

export default function useIndex({navigation, route}: PropsSignUp) {
  //console.log('route: ', route);
  const [email, setEmail] = useState(route.params.email);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [pixKey, setPixKey] = useState('');
  const [isMessage, setMessage] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);
  const context = useAppContext();

  const handleSingUp = async () => {
    setLoading(false);
    if (!passwordValidation(password)) {
      setLoading(true);
      return setMessage('Senha deve ter no mínimo 8 dígitos');
    } else if (password !== passwordConfirm) {
      setLoading(true);
      return setMessage('Senha não estão iguais');
    }
    const url = `${backEndUrl}/clients/create`;
    const pushToken = await messaging().getToken();
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        pixKey,
        pushToken,
      }),
    };
    async function callBack(data: any) {
      context.setClient(data);
      await AsyncStorage.setItem('client', JSON.stringify(data));
      const params = route.params as any;
      navigation.navigate(params.screen, {
        ...params,
        clientId: data.clientId,
      });
    }
    setLoading(false);
    await request({url, options, setMessage, callBack});
    setLoading(true);
  };
  return {
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
  };
}
