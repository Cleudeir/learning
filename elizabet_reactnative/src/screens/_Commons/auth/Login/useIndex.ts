import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {useEffect, useState} from 'react';
import request from '../../../../api/request';
import useAppContext from '../../../../context';
import {backEndUrl} from '../../../../env';
import {PropsLogin} from '../../../Interface';

export default function useIndex({route, navigation}: PropsLogin) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMessage, setMessage] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);
  const context = useAppContext();

  const redirect = (clientId: number) => {
    const params = route.params as any;
    navigation.navigate(params.screen, {
      ...params,
      clientId,
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      if (route.params.email) {
        setEmail(route.params.email);
      }
      setLoading(false);
      try {
        const value = await AsyncStorage.getItem('client');
        if (context.client) {
          redirect(context.client?.clientId);
        } else if (value !== null) {
          const client = await JSON.parse(value);
          context.setClient(client);
          redirect(client.clientId);
        }
      } catch (error: any) {
        console.error('error: ', error.error);
      }
      setLoading(true);
    });
    return unsubscribe;
  }, [navigation, context]);
  //console.log('route: ', route);

  const handleLogin = async () => {
    if (email === '') {
      setMessage('Preencha seu E-mail');
      return;
    } else if (password === '') {
      setMessage('Preencha sua senha');
      return;
    }
    setLoading(false);
    function callBack(data: any) {
      context.setClient(data);
      try {
        AsyncStorage.setItem('client', JSON.stringify(data));
      } catch (error: any) {
        console.error(error.message);
      }
      redirect(data.clientId);
    }

    const url = `${backEndUrl}/clients/readByEmail`;
    const pushToken = await messaging().getToken();
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.toLowerCase(),
        password,
        pushToken,
      }),
    };

    await request({url, options, setMessage, callBack});
    setLoading(true);
  };

  const onSignUpPress = async () => {
    const params = route.params as any;
    navigation.navigate('SignUp', {
      ...params,
      email,
    });
  };
  const onRemember = async () => {
    const params = route.params as any;
    navigation.navigate('Remember', {
      ...params,
      email,
    });
  };
  return {
    onSignUpPress,
    handleLogin,
    isMessage,
    isLoading,
    setMessage,
    password,
    setPassword,
    email,
    setEmail,
    onRemember,
  };
}
