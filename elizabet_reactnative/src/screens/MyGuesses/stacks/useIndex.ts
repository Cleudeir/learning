import {useEffect, useState} from 'react';
import request from '../../../api/request';
import useAppContext from '../../../context';
import {backEndUrl} from '../../../env';
import {GuessesType} from '../../../types/Guess';
import {PropsMyGuesses} from '../../Interface';

const useIndex = ({navigation}: PropsMyGuesses) => {
  const [guesses, setGuesses] = useState<GuessesType[] | []>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isMessage, setMessage] = useState<string | null>(null);
  const context = useAppContext();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      if (!context.client) {
        navigation.navigate('Login', {
          screen: 'MyGuesses',
        });
      } else if (context.client?.clientId) {
        setLoading(false);
        await fetchData(context.client.clientId);
        setLoading(true);
        navigation.navigate('MyGuesses');
      }
    });

    return unsubscribe;
  }, [navigation, context]);

  const fetchData = async (clientId: number) => {
    const url = `${backEndUrl}/guess/readAllByClient?clientId=${clientId}&paymentStatus=approved`;
    function callBack(data: any) {
      if (data.length > 0) {
        setGuesses(data);
      } else {
        setMessage('Nenhum Palpite Encontrado');
        setLoading(true);
      }
    }
    await request({url, setMessage, callBack});
  };

  return {guesses, isMessage, setMessage, isLoading, fetchData};
};

export default useIndex;
