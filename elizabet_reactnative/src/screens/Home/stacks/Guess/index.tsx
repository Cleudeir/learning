import {faCalendarMinus, faClock} from '@fortawesome/free-regular-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {} from 'react-native-paper';
import ContainerScreen from '../../../../components/ContainerScreen';
import globalStyle from '../../../../styles/Fontes';
import TransformMoney from '../../../../utils/TransformMoney';
import TransformToDDMMM from '../../../../utils/TransformToDDMMM';
import TransformToHHMM from '../../../../utils/TransformToHHMM';
import {teamIcons} from '../../../../utils/lists';
import {PropsGuess} from '../../../Interface';
import useIndex from './useIndex';

const GuessScreen: React.FC<PropsGuess> = ({
  route,
  navigation,
}): JSX.Element => {
  const {
    homeTeamGuess,
    setHomeTeamGuess,
    awayTeamGuess,
    setAwayTeamGuess,
    match,
    value,
    handleGuess,
    isMessage,
    setMessage,
    isLoading,
  } = useIndex({navigation, route});

  const [{imagePath: homeTeamIcon}] = teamIcons.filter(
    (icon: any) => String(match.homeTeamName) === icon.name,
  ) as any;

  const [{imagePath: awayTeamIcon}] = teamIcons.filter(
    (icon: any) => String(match.awayTeamName) === icon.name,
  ) as any;

  return (
    <ContainerScreen
      isLoading={isLoading}
      isMessage={isMessage}
      setMessage={setMessage}>
      <View style={globalStyle.container}>
        <Text style={globalStyle.h85}>Palpite Agora</Text>
        <Text style={[globalStyle.h60, globalStyle.HighPadding]}>
          Com apenas {TransformMoney(value)} dê seu palpite no Placar
        </Text>
        <View style={globalStyle.form}>
          <View style={styles.matchInfos}>
            <View style={styles.containerHeader}>
              <View style={styles.containerDate}>
                <FontAwesomeIcon
                  icon={faCalendarMinus}
                  color="#000"
                  size={20}
                />
                <Text style={styles.textDate}>
                  {TransformToDDMMM(match.matchDate)}
                </Text>
              </View>
              <View style={styles.containerDate}>
                <FontAwesomeIcon icon={faClock} color="#000" size={20} />
                <Text style={styles.textDate}>
                  {TransformToHHMM(match.matchDate)}
                </Text>
              </View>
            </View>
            <View style={styles.containerImage}>
              <View style={styles.containerBlock}>
                <View style={styles.containerScore}>
                  <Image style={styles.tinyLogo} source={homeTeamIcon} />
                  <Text style={styles.TextNameTeam}>{match.homeTeamName}</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Gols"
                    keyboardType="numeric"
                    value={homeTeamGuess.toString()}
                    onChangeText={setHomeTeamGuess}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.textX}>x</Text>
              </View>
              <View style={styles.containerBlock}>
                <View style={styles.containerScore}>
                  <Image style={styles.tinyLogo} source={awayTeamIcon} />
                  <Text style={styles.TextNameTeam}>{match.awayTeamName}</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Gols"
                    keyboardType="numeric"
                    value={awayTeamGuess.toString()}
                    onChangeText={setAwayTeamGuess}
                  />
                </View>
              </View>
            </View>
            <View style={styles.containerLocation}>
              <FontAwesomeIcon icon={faLocationDot} color="#000" size={20} />
              <Text style={styles.textDate}>{match.local}</Text>
            </View>
          </View>
        </View>
        <Pressable style={globalStyle.ButtonContainer} onPress={handleGuess}>
          <Text style={globalStyle.ButtonText}>Palpitar</Text>
        </Pressable>
      </View>
    </ContainerScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2f80a3',
  },
  title1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  containerScore: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    width: 100,
    backgroundColor: 'white',
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  matchInfos: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    width: '100%',
  },
  containerImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBlock: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 80,
    height: 80,
    margin: 10,
  },
  TextNameTeam: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  textX: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
    width: '100%',
    verticalAlign: 'middle',
    height: 100,
  },
  textLocal: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    width: '100%',
    textAlign: 'center',
    marginTop: 30,
  },
  containerHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
  },
  containerDate: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  textDate: {
    fontSize: 16,
    color: '#333',
    flexWrap: 'wrap',
    alignSelf: 'center',
    textAlign: 'center',
  },
  containerLocation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
});

export default GuessScreen;
