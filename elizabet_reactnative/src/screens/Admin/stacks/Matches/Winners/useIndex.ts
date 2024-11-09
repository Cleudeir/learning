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
  const [isMessage, setMessage] = useState<string | null>('');
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
    if (isMessage) {
      setTimeout(() => {
        navigation.navigate('Matches');
      }, 2000);
    }
  }, [isMessage]);

  const _fetch = async () => {
    const url = `${backEndUrl}/guess/readAllByMatchWinner?matchId=${match.matchId}`;
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

  const handlePaidStatusUpdate = async (guess: GuessTypeWinners) => {
    //console.log('guess: ', guess.paid);
    const url = `${backEndUrl}/guess/update`;
    const payload = {
      guessId: guess.guessId,
      paid: !guess.paid,
    };

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        setMessage('Failed to update paid status');
      }
      const updatedGuess = await response.json();
      //console.log('updatedGuess: ', updatedGuess);
      await _fetch();
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return {guesses, isLoading, isMessage, setMessage, handlePaidStatusUpdate};
}
