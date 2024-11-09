import {useState} from 'react';
import useAppContext from '../../../../context';
import {PropsGuess} from '../../../Interface';

const useIndex = ({navigation, route}: PropsGuess) => {
  //console.log('route: ', route);
  const [homeTeamGuess, setHomeTeamGuess] = useState('');
  const [awayTeamGuess, setAwayTeamGuess] = useState('');
  const [isMessage, setMessage] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [match] = useState(route.params);
  const [value] = useState(5);
  const context = useAppContext();

  const handleGuess = () => {
    setLoading(false);
    if (homeTeamGuess !== '' && awayTeamGuess !== '') {
      if (context.client && context.client.clientId) {
        navigation.navigate('Payment', {
          homeTeamGuess: Number(homeTeamGuess),
          awayTeamGuess: Number(awayTeamGuess),
          matchId: Number(match.matchId),
          clientId: context.client.clientId,
          value,
        });
      } else {
        navigation.navigate('Login', {
          homeTeamGuess: parseInt(homeTeamGuess, 10),
          awayTeamGuess: parseInt(awayTeamGuess, 10),
          matchId: match.matchId,
          value,
          screen: 'Payment',
        });
      }
    } else {
      setMessage('Por favor preencha o placar completamente');
    }
    setLoading(true);
  };

  return {
    homeTeamGuess,
    setHomeTeamGuess,
    awayTeamGuess,
    setAwayTeamGuess,
    match,
    value,
    handleGuess,
    isMessage,
    isLoading,
    setMessage,
  };
};

export default useIndex;
