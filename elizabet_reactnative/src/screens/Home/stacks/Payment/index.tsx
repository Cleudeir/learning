import React from 'react';

import ContainerScreen from '../../../../components/ContainerScreen';
import {PropsPayment} from '../../../Interface';

import {Dimensions} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import useIndex from './useIndex';
const PaymentScreen: React.FC<PropsPayment> = ({
  route,
  navigation,
}): JSX.Element => {
  const {
    uri,
    isLoading,
    isMessage,
    setMessage,
    webViewRef,
    onShouldStartLoadWithRequest,
  } = useIndex({
    route,
    navigation,
  });
  const customScript = `
  document.body.style.background = 'white';
`;

  const customStyle = `
  * {
    font-family: 'Times New Roman';
  }
  p {
    font-size: 16px;
  }
  body {
    margin-bottom: 50px
  }
`;

  const files = [
    {
      href: 'cssfileaddress',
      type: 'text/css',
      rel: 'stylesheet',
    },
  ];
  const height = Dimensions.get('screen').height;
  const scalesPageToFit = true;
  const viewportContent = 'width=device-width, user-scalable=no';
  const style = {
    marginTop: 35,
    marginBottom: 50,
    height,
  };

  const htmlSource = `
  <body>
    <div style="display: flex; justify-content: center; align-items: center; height: ${
      height / 2
    }">
      <img
        src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-9.jpg"
        alt="Loading"
        style="width: 150px"
      />
    </div>
  </body>
`;

  return (
    <ContainerScreen
      isLoading={isLoading}
      isMessage={isMessage}
      setMessage={setMessage}>
      <AutoHeightWebView
        ref={webViewRef}
        style={style}
        customScript={customScript}
        customStyle={customStyle}
        files={files}
        source={!uri ? {html: htmlSource} : ({uri} as any)}
        scalesPageToFit={scalesPageToFit}
        viewportContent={viewportContent}
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
      />
    </ContainerScreen>
  );
};

export default PaymentScreen;
