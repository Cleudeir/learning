import {useEffect, useState} from 'react';
import {backEndUrl} from '../../../../env';
import {ClientType} from '../../../../types/Client';
import {PropsClients} from '../../../Interface';

export default function useIndex({navigation}: PropsClients) {
  const [clients, setClients] = useState<ClientType[] | []>([]);
  const [isMessage, setMessage] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await fetchData();
    });
    return unsubscribe;
  }, [navigation]);

  const fetchData = async () => {
    setLoading(false);
    try {
      const response = await fetch(`${backEndUrl}/clients/readAll`);
      if (response.ok) {
        const data = await response.text();
        const parsedData = JSON.parse(data);
        if (parsedData.error) {
          setMessage(parsedData.error);
          setTimeout(() => {
            navigation.navigate('Matches');
          }, 2000);
        } else {
          setLoading(true);
          setClients(parsedData);
        }
      } else {
        setMessage(response.statusText);
      }
    } catch (error: any) {
      setMessage(error.message);
      setTimeout(() => {
        navigation.navigate('Administrator');
      }, 2000);
    }
  };
  return {isLoading, isMessage, setMessage, clients};
}
