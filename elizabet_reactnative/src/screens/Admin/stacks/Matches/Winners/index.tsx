import ContainerScreen from '../../../../../components/ContainerScreen';
import {PropsWinnersMatch} from '../../../../Interface';
import Card from './Card';
import useIndex from './useIndex';

const WinnersMatch: React.FC<PropsWinnersMatch> = ({
  navigation,
  route,
}): JSX.Element => {
  const {guesses, isLoading, isMessage, setMessage, handlePaidStatusUpdate} =
    useIndex({
      navigation,
      route,
    });
  return (
    <ContainerScreen
      isLoading={isLoading}
      isMessage={isMessage}
      setMessage={setMessage}>
      {guesses.map(guess => (
        <Card
          guess={guess}
          key={guess.guessId}
          handlePaidStatusUpdate={handlePaidStatusUpdate}
        />
      ))}
    </ContainerScreen>
  );
};

export default WinnersMatch;
