import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GuessTypeWinners} from '../../../../../types/Guess';
import TransformMoney from '../../../../../utils/TransformMoney';

interface Props {
  guess: GuessTypeWinners;
  handlePaidStatusUpdate: (guess: GuessTypeWinners) => void;
}
const Card = ({guess, handlePaidStatusUpdate}: Props): JSX.Element => {
  return (
    <View key={guess.guessId} style={styles.card}>
      <View style={styles.infosContainer}>
        <Text style={styles.value}>Palpite: {TransformMoney(guess.value)}</Text>
        {guess.winnings > 0 && (
          <View>
            <Text style={styles.winnings}>
              Ganho: {TransformMoney(guess.winnings)}
            </Text>
            <Text style={styles.paid}>
              Estado : {!guess.paid ? 'Não pago' : 'Pago'}
            </Text>
            <Text style={styles.winnings}>Email: {guess.client.email}</Text>
            <Text style={styles.winnings}>
              Chave PiX: {guess.client.pixKey}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.paidContainer}>
        <TouchableOpacity
          onPress={() => handlePaidStatusUpdate(guess)}
          style={!guess.paid ? styles.buttonNoPaid : styles.buttonPaid}>
          <Text style={styles.buttonText}>
            {!guess.paid ? 'Definir como \n pago' : 'Definir como \n não pago'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000000',
    backgroundColor: '#ffff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    width: '95%',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 16,
    color: '#000',
  },
  winnings: {
    fontSize: 14,
    color: '#000',
  },
  paid: {
    fontSize: 14,
    color: '#000',
  },
  infosContainer: {
    width: '70%',
    height: '100%',
  },
  paidContainer: {
    width: '30%',
    height: '100%',
  },
  buttonPaid: {
    backgroundColor: '#f097a0',
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
  },
  buttonNoPaid: {
    backgroundColor: '#2196F3',
    borderRadius: 4,
    alignItems: 'center',
    color: 'black',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    padding: 4,
  },
});
