import {useEffect, useState} from 'react';
import request from '../../../api/request';
import useAppContext from '../../../context';
import {backEndUrl} from '../../../env';
import {MatchType} from '../../../types/Matches';
import TransformDate from '../../../utils/TransformDate';
import removeAccents from '../../../utils/removeAccents';

const useHomeScreen = (navigation: any) => {
  const [matches, setMatches] = useState<MatchType[] | null>(null);
  const [data, setData] = useState<MatchType[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isMessage, setMessage] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');

  const context = useAppContext();

  useEffect(() => {
    if (data) {
      const filter = data.filter(
        item =>
          removeAccents(item.awayTeamName).includes(removeAccents(search)) ||
          removeAccents(item.homeTeamName).includes(removeAccents(search)),
      );
      setMatches(filter);
    }
  }, [search]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await fetchData();
    });
    return unsubscribe;
  }, [navigation, context]);

  const fetchData = async () => {
    setLoading(false);
    const twoHours = 2 * 60 * 60 * 1000;
    const date = String(
      new Date(Date.now() + twoHours).toJSON().toLocaleString(),
    );
    const url = `${backEndUrl}/matches/readAllByDate?date=${date}&type=after&range=week&order=ASC`;
    function callBack(_data: any) {
      setMatches(_data);
      setData(_data);
      //console.log('_data: ', _data.length);
    }
    await request({url, setMessage, callBack});
    setLoading(true);
  };

  const navigateToScreen = (item: MatchType) => {
    setLoading(false);
    setTimeout(() => {
      navigation.navigate('Guess', {
        ...item,
        clientId: context.client?.clientId,
      });
    }, 100);
  };

  return {
    matches,
    isLoading,
    navigateToScreen,
    TransformDate,
    isMessage,
    setMessage,
    setSearch,
    search,
  };
};

export default useHomeScreen;
