import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {useEffect, useState} from 'react';
import useAppContext from '../../../context';
import {PropsConfigLogin} from '../../Interface';
export default function useIndex({navigation}: PropsConfigLogin) {
  const context = useAppContext();
  const version = context.credentials?.version || '';
  const versionType = context.credentials?.versionType || '';
  const [isMessage, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (!context.client) {
        navigation.navigate('Login', {
          screen: 'MyAccount',
        });
      } else {
        navigation.navigate('MyAccount');
      }
    });
    return unsubscribe;
  }, [navigation, context]);

  const LogOut = async () => {
    try {
      await messaging().deleteToken();
      await AsyncStorage.removeItem('client');
      context.setClient(null);
      navigation.navigate('Home');
      navigation.navigate('MyGuesses');
      navigation.navigate('Administrator');
    } catch (error) {
      console.error('error: ', error);
    }
  };
  const navigateToEditAccount = () => {
    navigation.navigate('EditAccount');
  };
  return {
    isMessage,
    navigateToEditAccount,
    setMessage,
    LogOut,
    version,
    versionType,
  };
}
