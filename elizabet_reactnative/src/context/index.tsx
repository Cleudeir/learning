import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {backEndUrl} from '../env';
import {ClientType} from '../types/Client';

enum enumVersion {
  Development = 'Development',
  Production = 'Production',
}

interface Credentials {
  paymentAccessToken: string;
  version: string;
  versionType: enumVersion;
}
interface contextProps {
  client: ClientType | null;
  setClient: Dispatch<SetStateAction<ClientType | null>>;
  credentials: Credentials | null;
  setCredentials: Dispatch<SetStateAction<Credentials | null>>;
}

const AppContext = createContext<contextProps>({
  client: null,
  setClient: () => {
    return;
  },
  credentials: null,
  setCredentials: () => {
    return;
  },
});

export function AppWrapper({children}: {children: any}) {
  const [credentials, setCredentials] = useState<Credentials | null>(null);
  const [client, setClient] = useState<ClientType | null>(null);

  useEffect(() => {
    console.log('credentials: ', credentials);
    const fetchCredentials = async () => {
      const url = `${backEndUrl}/credentials`;
      console.log('url: ', url);
      try {
        const response = await fetch(url);
        const data = await response.json();
        AsyncStorage.setItem('credentials', JSON.stringify(data));
        console.log('data: ', data);
        setCredentials(data);
      } catch (error) {
        const remember = await AsyncStorage.getItem('credentials');
        if (remember) {
          const obj = JSON.parse(remember);
          setCredentials(obj);
        } else {
          setTimeout(fetchCredentials, 60 * 1000);
        }
        console.error(error);
      }
    };
    fetchCredentials();
  }, []);

  return (
    <AppContext.Provider
      value={{
        credentials,
        client,
        setClient,
        setCredentials,
      }}>
      {children}
    </AppContext.Provider>
  );
}

export default function useAppContext() {
  return useContext<contextProps>(AppContext);
}
