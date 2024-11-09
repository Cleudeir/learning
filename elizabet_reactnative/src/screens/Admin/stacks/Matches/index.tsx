import React from 'react';
import {Text, View} from 'react-native';
import ContainerScreen from '../../../../components/ContainerScreen';
import globalStyle from '../../../../styles/Fontes';
import {PropsMatches} from '../../../Interface';
import Card from './Card';
import useIndex from './useIndex';

const MatchesScreen: React.FC<PropsMatches> = ({
  navigation,
  route,
}): JSX.Element => {
  //console.log('route: ', route);

  const {matches, isLoading, isMessage, setMessage} = useIndex({
    navigation,
    route,
  });

  return (
    <ContainerScreen
      isLoading={isLoading}
      isMessage={isMessage}
      setMessage={setMessage}>
      <View style={globalStyle.container}>
        <Text style={[globalStyle.h60, globalStyle.HighPadding]}>
          Ultimas 30 Partidas cadastradas
        </Text>
        {matches.map(item => (
          <Card
            item={item}
            key={item.matchId}
            navigation={navigation}
            route={route}
          />
        ))}
      </View>
    </ContainerScreen>
  );
};

export default MatchesScreen;
