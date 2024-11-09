import ContainerScreen from '../../../../../components/ContainerScreen';
import {PropsWinnersMatch} from '../../../../Interface';
import Card from './Card';
import useIndex from './useIndex';

const GuessesMatch: React.FC<PropsWinnersMatch> = ({
  navigation,
  route,
}): JSX.Element => {
  const {guesses, isLoading, isMessage, setMessage} = useIndex({
    navigation,
    route,
  });
  return (
    <ContainerScreen
      isLoading={isLoading}
      isMessage={isMessage}
      setMessage={setMessage}>
      {guesses.map(guess => (
        <Card guess={guess} key={guess.guessId} />
      ))}
    </ContainerScreen>
  );
};

export default GuessesMatch;
