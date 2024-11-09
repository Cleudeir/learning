import {useState} from 'react';
import {PropsRemember} from '../../../Interface';

export default function useIndex({navigation, route}: PropsRemember) {
  //console.log('route: ', route);
  const [email, setEmail] = useState(route.params.email);
  //console.log('email: ', email);
  const [isMessage, setMessage] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);

  const handle = async () => {
    setLoading(false);
    const params = route.params as any;
    navigation.navigate('Login', {
      ...params,
      email,
    });
    setLoading(true);
  };

  return {
    handle,
    isMessage,
    isLoading,
    setMessage,
    email,
    setEmail,
  };
}
