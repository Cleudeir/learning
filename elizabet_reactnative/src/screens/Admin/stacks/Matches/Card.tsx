import {faCalendarMinus, faClock} from '@fortawesome/free-regular-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MatchType} from '../../../../types/Matches';
import TransformToDDMMM from '../../../../utils/TransformToDDMMM';
import TransformToHHMM from '../../../../utils/TransformToHHMM';
import {teamIcons} from '../../../../utils/lists';
import {PropsMatches} from '../../../Interface';

const width = Dimensions.get('screen').width;

interface CardProps extends PropsMatches {
  item: MatchType;
}

const Card: React.FC<CardProps> = ({item, navigation}) => {
  const [{imagePath: homeTeamIcon}] = teamIcons.filter(
    (icon: any) => String(item.homeTeamName) === icon.name,
  ) as any;
  const [{imagePath: awayTeamIcon}] = teamIcons.filter(
    (icon: any) => String(item.awayTeamName) === icon.name,
  ) as any;

  const navigateToScreenUpdate = () => {
    navigation.navigate('SetMatchScore', {
      ...item,
    });
  };

  const navigateToWinnersScreen = () => {
    //console.log('click');
    navigation.navigate('WinnersMatch', {
      ...item,
    });
  };

  const navigateGuesses = () => {
    //console.log('click');
    navigation.navigate('GuessesMatch', {
      ...item,
    });
  };

  const navigateEditGuess = () => {
    //console.log('click');
    navigation.navigate('EditMatch', {
      ...item,
    });
  };

  return (
    <Pressable style={styles.card} key={item.matchId}>
      <View style={styles.matchItem}>
        <View style={styles.matchInfos}>
          <View style={styles.header}>
            <View style={styles.dateContainer}>
              <FontAwesomeIcon icon={faCalendarMinus} color="#000" size={20} />
              <Text style={styles.dateText}>
                {TransformToDDMMM(item.matchDate)}
              </Text>
            </View>
            <View style={styles.dateContainer}>
              <FontAwesomeIcon icon={faClock} color="#000" size={20} />
              <Text style={styles.dateText}>
                {TransformToHHMM(item.matchDate)}
              </Text>
            </View>
          </View>
          <View style={styles.teamContainer}>
            <View style={styles.teamBlock}>
              <Image style={styles.teamLogo} source={homeTeamIcon} />
              <Text style={styles.teamName}>{item.homeTeamName}</Text>
              <Text style={styles.teamScore}>
                {item.homeTeamScore !== -1 && `${item.homeTeamScore}`}
              </Text>
            </View>
            <View>
              <Text style={styles.versusText}>x</Text>
            </View>
            <View style={styles.teamBlock}>
              <Text style={styles.teamScore}>
                {item.awayTeamScore !== -1 && `${item.awayTeamScore}`}
              </Text>
              <Text style={styles.teamName}>{item.awayTeamName}</Text>
              <Image style={styles.teamLogo} source={awayTeamIcon} />
            </View>
          </View>
          <View style={styles.locationContainer}>
            <FontAwesomeIcon icon={faLocationDot} color="#000" size={20} />
            <Text style={styles.locationText}>{item.local}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={navigateEditGuess}>
            <Text style={styles.buttonText}>Editar</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={navigateToScreenUpdate}>
            <Text style={styles.buttonText}>Definir Placar</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={navigateToWinnersScreen}>
            <Text style={styles.buttonText}>Palpites Ganhadores</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={navigateGuesses}>
            <Text style={styles.buttonText}>Todos Palpites</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginVertical: 10,
  },
  matchItem: {
    flexDirection: 'column',
    backgroundColor: '#ffff',
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    padding: 5,
  },
  matchInfos: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
    flexWrap: 'wrap',
    alignSelf: 'center',
    textAlign: 'center',
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  teamScore: {
    color: '#000',
    fontSize: width * 0.04,
    margin: 1,
    textAlign: 'center',
    verticalAlign: 'middle',
    fontWeight: 'bold',
  },
  teamLogo: {
    width: 30,
    height: 30,
    margin: 5,
  },
  teamName: {
    fontSize: width * 0.04,
    paddingHorizontal: width * 0.01,
    fontWeight: 'bold',
    color: '#1E232C',
    width: width * 0.29,
    textAlign: 'center',
  },
  versusText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#000',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    width: '100%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 10,
    borderRadius: 3,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.16,
    color: 'black',
    textAlign: 'center',
    verticalAlign: 'middle',
    textTransform: 'uppercase',
  },
});

export default Card;
