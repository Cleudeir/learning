import React from 'react';
import ContainerScreen from '../../../components/ContainerScreen';
import {PropsMyGuesses} from '../../Interface';
import Card from './Card';
import useIndex from './useIndex';

const MyGuesses: React.FC<PropsMyGuesses> = ({navigation, route}) => {
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

export default MyGuesses;
