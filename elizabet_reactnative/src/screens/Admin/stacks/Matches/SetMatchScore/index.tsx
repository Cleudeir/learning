import React from 'react';
import {Text, TextInput, View} from 'react-native';
import ButtonConfirm from '../../../../../components/ButtonConfirm/ButtonConfirm';
import ContainerScreen from '../../../../../components/ContainerScreen';
import globalStyle from '../../../../../styles/Fontes';
import {PropsSetMatchScore} from '../../../../Interface';
import useIndex from './useIndex';

const SetMatchScore: React.FC<PropsSetMatchScore> = ({
  route,
  navigation,
}): JSX.Element => {
  const {
    isMessage,
    setMessage,
    homeTeamScore,
    setHomeTeamScore,
    awayTeamScore,
    match,
    setAwayTeamScore,
    handleGuess,
    verify,
    isLoading,
  } = useIndex({navigation, route});
  return (
    <ContainerScreen
      isLoading={isLoading}
      isMessage={isMessage}
      setMessage={setMessage}>
      <View style={globalStyle.container}>
        <Text style={globalStyle.h85}>Qual foi o placar?</Text>
        <Text style={globalStyle.h50}>Vamos, definir!</Text>
        <View style={globalStyle.form}>
          <Text style={globalStyle.label}>
            Time da Casa: {match.homeTeamName}
          </Text>
          <TextInput
            style={globalStyle.input}
            placeholder="Goals"
            keyboardType="numeric"
            value={homeTeamScore.toString()}
            onChangeText={setHomeTeamScore}
          />
          <Text style={globalStyle.label}>
            Time de Fora: {match.awayTeamName}
          </Text>
          <TextInput
            style={globalStyle.input}
            placeholder="Goals"
            keyboardType="numeric"
            value={awayTeamScore.toString()}
            onChangeText={setAwayTeamScore}
          />
        </View>
        <ButtonConfirm
          title="Definir"
          verify={verify}
          exec={handleGuess}
          text={`
Tem certeza que deseja definir o placar? 
   
${match.homeTeamName}:  ${homeTeamScore}
${match.awayTeamName}:  ${awayTeamScore}
        `}
        />
      </View>
    </ContainerScreen>
  );
};

export default SetMatchScore;
