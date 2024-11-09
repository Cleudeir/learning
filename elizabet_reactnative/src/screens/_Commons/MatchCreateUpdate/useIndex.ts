import {useEffect, useState} from 'react';
import request from '../../../api/request';
import useAppContext from '../../../context';
import {backEndUrl} from '../../../env';
import {MatchType} from '../../../types/Matches';

const useIndex = ({navigation, route}: any) => {
  const dataInitial = new Date();
  const context = useAppContext();
  const [homeTeamName, setHomeTeamName] = useState('-');
  const [awayTeamName, setAwayTeamName] = useState('-');
  const [matchDate, setMatchDate] = useState(dataInitial);
  const [local, setLocal] = useState('-');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isMessage, setMessage] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (route.params) {
      const params = route.params as MatchType;
      setHomeTeamName(params.homeTeamName);
      setAwayTeamName(params.awayTeamName);
      setMatchDate(new Date(params.matchDate));
      setLocal(params.local);
    }
  }, []);

  const handleDateConfirm = (date: Date) => {
    //console.log('date: ', date);
    setShowDatePicker(false);
    setMatchDate(date);
  };

  const handleDateCancel = () => {
    setShowDatePicker(false);
  };
  const verify = () => {
    if (homeTeamName === '-' || awayTeamName === '-' || local === '-') {
      setMessage('Por favor preencha todos os campos');
      return false;
    }
    if (matchDate <= dataInitial) {
      setMessage('Por favor preencha data futura!');
      return false;
    }

    if (homeTeamName === awayTeamName) {
      setMessage('Os dois times estão iguais');
      return false;
    }
    return true;
  };

  const createUpdateMatch = async () => {
    const url = `${backEndUrl}/matches/${route.params ? 'update' : 'create'}`;
    const body: any = {
      homeTeamName,
      awayTeamName,
      matchDate,
      local,
    };
    if (route.params) {
      body.matchId = route.params?.matchId;
    }
    const options = {
      method: route.params ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        clientId: context.client?.clientId,
      },
      body: JSON.stringify(body),
    } as any;

    function callBack() {
      setMessage(route.params ? 'Partida Atualizada' : 'Nova partida Criada');
      setTimeout(() => {
        navigation.navigate('Matches');
      }, 1000);
    }
    setLoading(false);
    await request({url, options, setMessage, callBack});
    setLoading(true);
  };

  return {
    homeTeamName,
    setHomeTeamName,
    awayTeamName,
    setAwayTeamName,
    matchDate,
    showDatePicker,
    setShowDatePicker,
    isMessage,
    setMessage,
    createUpdateMatch,
    verify,
    handleDateConfirm,
    handleDateCancel,
    isLoading,
    setLoading,
    local,
    setLocal,
  };
};

export default useIndex;
