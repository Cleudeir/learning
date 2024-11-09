import {faCalendarMinus, faClock} from '@fortawesome/free-regular-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import TransformToDDMMM from '../../../utils/TransformToDDMMM';
import TransformToHHMM from '../../../utils/TransformToHHMM';
import {teamIcons} from '../../../utils/lists';
const width = Dimensions.get('screen').width;

export default function Card({item, navigateToScreen}: any) {
  const [{imagePath: homeTeamIcon}] = teamIcons.filter(
    (icon: any) => String(item.homeTeamName) === icon.name,
  ) as any;

  const [{imagePath: awayTeamIcon}] = teamIcons.filter(
    (icon: any) => String(item.awayTeamName) === icon.name,
  ) as any;

  return (
    <TouchableNativeFeedback
      style={styles.cardMatch}
      key={item.matchId}
      onPress={() => navigateToScreen(item)}>
      <View style={styles.matchItem}>
        <View style={styles.matchInfos}>
          <View style={styles.containerHeader}>
            <View style={styles.containerDate}>
              <FontAwesomeIcon icon={faCalendarMinus} color="#000" size={20} />
              <Text style={styles.textDate}>
                {TransformToDDMMM(item.matchDate)}
              </Text>
            </View>

            <View style={styles.containerDate}>
              <FontAwesomeIcon icon={faClock} color="#000" size={20} />
              <Text style={styles.textDate}>
                {TransformToHHMM(item.matchDate)}
              </Text>
            </View>
          </View>
          <View style={styles.containerLocation}>
            <FontAwesomeIcon icon={faLocationDot} color="#000" size={20} />
            <Text style={styles.textDate}>{item.local}</Text>
          </View>
          <View style={styles.containerImage}>
            <View style={styles.containerBlock}>
              <Image style={styles.tinyLogo} source={homeTeamIcon} />
              <Text style={styles.textNameTeam}>{item.homeTeamName}</Text>
            </View>
            <View>
              <Text style={styles.textVersus}>x</Text>
            </View>
            <View style={styles.containerBlock}>
              <Text style={styles.textNameTeam}>{item.awayTeamName}</Text>
              <Image style={styles.tinyLogo} source={awayTeamIcon} />
            </View>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Palpitar</Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  cardMatch: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  matchItem: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    elevation: 1,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
  },
  containerImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 55,
    height: 55,
  },
  matchInfos: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    width: '100%',
  },
  containerHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
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
  textVersus: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#000',
  },
  textNameTeam: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#1E232C',
    width: width * 0.27,
    textAlign: 'center',
  },
  containerLocation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
  textLocal: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    width: '100%',
    textAlign: 'center',
    marginTop: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    borderColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 2,
    alignSelf: 'center',
    borderRadius: 8,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.16,
    color: 'black',
    textTransform: 'uppercase',
  },
});
