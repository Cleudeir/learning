import {useState} from 'react';
import {Dimensions, Pressable} from 'react-native';
import {Text} from 'react-native-paper';
import globalStyle from '../../styles/Fontes';
import PopUp from './PopUp';

const width = Dimensions.get('screen').width; //full width
const height = Dimensions.get('screen').height; //full height

interface Props {
  exec: () => void;
  verify: () => boolean;
  title: string;
  text: string;
}

const ButtonConfirm = ({exec, verify, title, text}: Props) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  return (
    <>
      <Pressable
        style={globalStyle.ButtonContainer}
        onPress={() => {
          const passed = verify();
          if (passed) {
            setVisible(true);
          }
        }}>
        <Text style={globalStyle.ButtonText}>{title}</Text>
      </Pressable>
      {isVisible && (
        <PopUp
          setVisible={setVisible}
          isVisible={isVisible}
          text={text}
          exec={exec}
        />
      )}
    </>
  );
};

export default ButtonConfirm;
