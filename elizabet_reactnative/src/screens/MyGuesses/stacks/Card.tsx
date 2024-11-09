import {
  faCalendarMinus,
  faClock,
  faComment,
} from '@fortawesome/free-regular-svg-icons';
import {faSackDollar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {GuessesType} from '../../../types/Guess';
import TransformMoney from '../../../utils/TransformMoney';
import TransformToDDMMM from '../../../utils/TransformToDDMMM';
import TransformToHHMM from '../../../utils/TransformToHHMM';
import {teamIcons} from '../../../utils/lists';

const width = Dimensions.get('screen').width; //full width

const Card = ({guess}: {guess: GuessesType}): JSX.Element => {
  const {homeTeamGuess, awayTeamGuess, paid, winnings, match} = guess;
  const {awayTeamScore, homeTeamName, homeTeamScore, matchDate, awayTeamName} =
    match;

  const [{imagePath: homeTeamIcon}] = teamIcons.filter(
    (icon: any) => String(homeTeamName) === icon.name,
  ) as any;

  const [{imagePath: awayTeamIcon}] = teamIcons.filter(
    (icon: any) => String(awayTeamName) === icon.name,
  ) as any;

  let backgroundColor = 'white';
  if (winnings > 0) {
    backgroundColor = '#a7ff99';
  } else if (homeTeamScore !== -1 && awayTeamScore !== -1) {
    backgroundColor = '#ff99a2';
  }

  return (
    <View style={[styles.matchInfos, {backgroundColor}]}>
      <View style={styles.containerHeader}>
        <View style={styles.containerDate}>
          <FontAwesomeIcon icon={faCalendarMinus} color="#000" size={20} />
          <Text style={styles.textDate}>{TransformToDDMMM(matchDate)}</Text>
        </View>
        <View style={styles.containerDate}>
          <FontAwesomeIcon icon={faClock} color="#000" size={20} />
          <Text style={styles.textDate}>{TransformToHHMM(matchDate)}</Text>
        </View>
      </View>

      <View style={styles.containerImage}>
        <View style={styles.containerBlock}>
          <View style={styles.containerNameIcon}>
            <Image style={styles.tinyLogo} source={homeTeamIcon} />
            <Text style={styles.TextNameTeam}>{homeTeamName}</Text>
          </View>
        </View>
        <View>
          <View style={styles.containerScore}>
            {homeTeamScore !== -1 && awayTeamScore !== -1 && (
              <>
                <Text style={styles.h45}>Resultado</Text>
                <Text style={styles.h75}>
                  {homeTeamScore} x {awayTeamScore}
                </Text>
              </>
            )}
          </View>

          <View style={styles.containerScore}>
            <Text style={[styles.h45]}>Palpite</Text>
            <Text style={styles.h50}>
              {homeTeamGuess} x {awayTeamGuess}
            </Text>
          </View>
        </View>
        <View style={styles.containerBlock}>
          <View style={styles.containerNameIcon}>
            <Image style={styles.tinyLogo} source={awayTeamIcon} />
            <Text style={styles.TextNameTeam}>{awayTeamName}</Text>
          </View>
        </View>
      </View>
      {winnings > 0 && (
        <View style={styles.containerHeader}>
          <View style={styles.containerDate}>
            <FontAwesomeIcon icon={faComment} color="#000" size={20} />
            <Text style={styles.containerPaid}>
              {paid ? 'Depósito feito' : 'Depósito não feito'}
            </Text>
          </View>
          <View style={styles.containerDate}>
            <FontAwesomeIcon icon={faSackDollar} color="#000" size={20} />
            <Text style={styles.containerPaid}>{TransformMoney(winnings)}</Text>
          </View>
        </View>
      )}
      {homeTeamScore !== -1 &&
        awayTeamScore !== -1 &&
        Number(winnings) === 0 && (
          <View style={styles.containerHeader}>
            <View style={styles.containerDate}>
              <FontAwesomeIcon icon={faComment} color="#000" size={20} />
              <Text style={styles.containerPaid}>Não foi desta vez!</Text>
            </View>
            <View style={styles.containerDate}>
              <FontAwesomeIcon icon={faSackDollar} color="#000" size={20} />
              <Text style={styles.containerPaid}>
                {TransformMoney(winnings)}
              </Text>
            </View>
          </View>
        )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  matchInfos: {
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
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
  containerPaid: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    marginVertical: 2,
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
    marginBottom: 0,
    marginTop: 5,
  },
  containerNameIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  containerScore: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#444',
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
    width: 40,
    height: 40,
    margin: 10,
  },
  h75: {
    fontSize: width * 0.075,
    marginBottom: -3,
  },
  h55: {
    fontSize: width * 0.055,
    marginBottom: -5,
  },
  h50: {
    fontSize: width * 0.05,
  },
  h45: {
    marginBottom: -5,
    marginTop: 5,
    fontSize: width * 0.045,
  },
  TextNameTeam: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    width: width * 0.25,
    textAlign: 'center',
  },
});
