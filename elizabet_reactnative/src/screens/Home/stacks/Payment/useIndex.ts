import {useEffect, useRef, useState} from 'react';
import {BackHandler} from 'react-native';
import request from '../../../../api/request';
import useAppContext from '../../../../context';
import {backEndUrl} from '../../../../env';
import UrlToObj from '../../../../utils/UrlToObj';
import checkout from './checkout';

export default function useIndex({navigation, route}: any) {
  const [isMessage, setMessage] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);
  const params = route.params;
  const context = useAppContext();
  const [uri, setUri] = useState<string | null>(null);
  const webViewRef: any = useRef(null);

  async function createGuessIntension(paymentId: string) {
    function callBack() {
      setMessage('Processando seu palpite, ja lhe aviso quando for concluído!');
      setTimeout(() => {
        setMessage(null);
        navigation.navigate('Home');
      }, 3000);
    }
    const url = `${backEndUrl}/guess/create`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...params,
        paymentId,
      }),
    };
    await request({url, options, setMessage, callBack});
  }

  useEffect(() => {
    (async () => {
      if (!context.client?.email) {
        return;
      }
      try {
        const accessToken = context.credentials?.paymentAccessToken;
        const email = context.client.email;
        if (accessToken && email) {
          const paymentPageURL = await checkout(email, accessToken);
          setUri(paymentPageURL);
        } else {
          console.error('accessToken && email: ', accessToken && email);
          setMessage('Erro ao carregar, tente novamente!');
        }

        //console.log('Payment Page URL:', paymentPageURL);
      } catch (error) {
        console.error('Error:', error);
        setMessage('Erro ao carregar, tente novamente!');
        setTimeout(() => {
          navigation.goBack();
        }, 2000);
      }
    })();
  }, [navigation]);

  const handleBackButton = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
      return true; // Prevent default back button behavior
    }
    return false;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  function onShouldStartLoadWithRequest(event: any) {
    const blockedURLs = [
      'https://www.mercadopago.com.br/',
      'https://policies.google.com/*',
      'https://mercadopago.com.br/ato-complaint/*',
      'https://www.mercadopago.com.br/ato-complaint/*',
    ]; // Add URLs you want to block
    const page = event.url.toLowerCase();
    for (let index = 0; index < blockedURLs.length; index++) {
      const element = blockedURLs[index];

      if (element.includes('*')) {
        if (page.includes(element.replace('*', ''))) {
          //console.log('element: ', element);
          return false; // Reject navigation for blocked URLs
        }
      } else {
        if (page === element) {
          //console.log('element: ', element);
          return false; // Reject navigation for blocked URLs
        }
      }
    }

    if (page.includes('//success/') || page.includes('//pending/')) {
      const obj = UrlToObj(page);
      //console.log('obj: \n', obj.payment_id);
      if (obj.payment_id) {
        setLoading(false);
        createGuessIntension(obj.payment_id);
        setLoading(true);
      } else {
        navigation.navigate('Guess', {
          ...route.params,
        });
      }

      return false;
    } else if (page.includes('//failure/')) {
      navigation.navigate('Guess', {
        ...route.params,
      });
      return false;
    }

    return true; // Allow navigation for other URLs
  }

  return {
    uri,
    isLoading,
    isMessage,
    setMessage,
    webViewRef,
    onShouldStartLoadWithRequest,
  };
}
