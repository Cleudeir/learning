import {Dimensions, Pressable, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import globalStyle from '../../styles/Fontes';

const width = Dimensions.get('screen').width; //full width
const height = Dimensions.get('screen').height; //full height

interface Props {
  isVisible: boolean;
  setVisible: (data: boolean) => void;
  noClosed?: boolean;
  exec?: () => void;
  text?: string;
}
export default function PopUp({
  noClosed,
  isVisible,
  setVisible,
  text,
  exec,
}: Props) {
  return (
    isVisible && (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          {!noClosed && (
            <Pressable
              style={[styles.buttonX]}
              onPress={() => {
                setVisible(false);
              }}>
              <Text style={[globalStyle.ButtonText, globalStyle.Bold]}>X</Text>
            </Pressable>
          )}
          <Text style={[globalStyle.h75, globalStyle.center]}>ELizaBET</Text>
          <Text
            style={[
              globalStyle.h55,
              globalStyle.center,
              globalStyle.HighPadding,
            ]}>
            {text && text[0].toLocaleUpperCase() + text.slice(1)}
          </Text>
          {exec && (
            <Pressable
              style={globalStyle.ButtonContainer}
              onPress={() => {
                setVisible(false);
                exec && exec();
              }}>
              <Text style={globalStyle.ButtonText}>Confirmar</Text>
            </Pressable>
          )}
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    zIndex: 999,
    backgroundColor: 'rgba(255,255,255,0.90)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  messageBox: {
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    elevation: 8,
    borderRadius: 5,
    padding: 10,
  },
  messageText: {
    borderRadius: 5,
    marginBottom: 20,
    color: '#000',
    fontWeight: '700',
    fontSize: width * 0.055,
  },
  buttonX: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1000,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 2,
    borderColor: '#ddd',
    borderWidth: 1,
    textTransform: 'uppercase',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#e0264f',
  },
});
