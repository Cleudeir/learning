import {useEffect, useState} from 'react';
import request from '../../../../../api/request';
import useAppContext from '../../../../../context';
import {backEndUrl} from '../../../../../env';
import {PropsSetMatchScore} from '../../../../Interface';

export default function useIndex({navigation, route}: PropsSetMatchScore) {
  const [homeTeamScore, setHomeTeamScore] = useState('');
  const [awayTeamScore, setAwayTeamScore] = useState('');
  const [isMessage, setMessage] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);
  const context = useAppContext();
  const [match] = useState(route.params);
  useEffect(() => {
    if (match?.homeTeamScore && match?.awayTeamScore) {
      if (match?.homeTeamScore !== -1 && match?.awayTeamScore !== -1) {
        setHomeTeamScore(String(match.homeTeamScore));
        setAwayTeamScore(String(match.awayTeamScore));
      }
    }
  }, [route.params]);

  const verify = () => {
    if (homeTeamScore === '' || awayTeamScore === '') {
      setLoading(true);
      setMessage('Por favor defina as duas pontuações');
      return false;
    }
    return true;
  };

  const handleGuess = async () => {
    setLoading(false);
    const url = `${backEndUrl}/matches/update`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        clientId: context.client?.clientId,
      },
      body: JSON.stringify({
        ...route.params,
        homeTeamScore,
        awayTeamScore,
      }),
    };

    function callBack() {
      setMessage('Partida Atualizada');
      setTimeout(() => {
        navigation.navigate('Matches');
      }, 2000);
    }
    await request({url, options, setMessage, callBack});
    setLoading(true);
  };

  return {
    isMessage,
    setMessage,
    homeTeamScore,
    setHomeTeamScore,
    awayTeamScore,
    setAwayTeamScore,
    match,
    handleGuess,
    verify,
    isLoading,
  };
}
