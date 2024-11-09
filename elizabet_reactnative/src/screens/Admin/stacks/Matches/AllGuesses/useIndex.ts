import {useEffect, useState} from 'react';
import request from '../../../../../api/request';
import useAppContext from '../../../../../context';
import {backEndUrl} from '../../../../../env';
import {GuessTypeWinners} from '../../../../../types/Guess';
import {PropsWinnersMatch} from '../../../../Interface';

export default function useIndex({navigation, route}: PropsWinnersMatch) {
  //console.log('route: ', route);
  const [guesses, setGuesses] = useState<GuessTypeWinners[] | []>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isMessage, setMessage] = useState<string | null>(null);
  const context = useAppContext();
  const [match] = useState(route.params);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setLoading(false);
      await _fetch();
      setLoading(true);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    //console.log('isMessage: ', isMessage);
    if (isMessage) {
      setTimeout(() => {
        navigation.navigate('Matches');
      }, 2000);
    }
  }, [isMessage]);

  const _fetch = async () => {
    const url = `${backEndUrl}/guess/readAllByMatch?matchId=${match.matchId}`;
    const options = {
      method: 'GET',
      headers: {
        clientId: context.client?.clientId,
      },
    };
    function callBack(data: any) {
      setGuesses(data);
    }
    setLoading(false);
    await request({url, options, setMessage, callBack});
    setLoading(true);
  };

  return {guesses, isLoading, setMessage, isMessage};
}
