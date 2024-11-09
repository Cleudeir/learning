import {useEffect, useState} from 'react';
import request from '../../../../api/request';
import useAppContext from '../../../../context';
import {backEndUrl} from '../../../../env';
import {MatchType} from '../../../../types/Matches';
import {PropsMatches} from '../../../Interface';

const useIndex = ({navigation}: PropsMatches) => {
  const [matches, setMatches] = useState<MatchType[] | []>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isMessage, setMessage] = useState<string | null>(null);
  const context = useAppContext();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await fetchMatches();
    });
    return unsubscribe;
  }, [navigation]);

  const fetchMatches = async () => {
    const url = `${backEndUrl}/matches/readAll?order=DESC&limit=30`;
    const options = {
      method: 'GET',
      headers: {
        clientId: context.client?.clientId,
      },
    } as any;
    function callBack(data: any) {
      setMatches(data);
    }
    setLoading(false);
    await request({url, options, setMessage, callBack});
    setLoading(true);
  };

  return {
    matches,
    isLoading,
    isMessage,
    setMessage,
  };
};

export default useIndex;
