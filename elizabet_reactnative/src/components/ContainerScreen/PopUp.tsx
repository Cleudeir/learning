import React from 'react';
import {Dimensions, Pressable, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import globalStyle from '../../styles/Fontes';

const width = Dimensions.get('screen').width; //full width
const height = Dimensions.get('screen').height; //full height


interface Props {
  setMessage: React.Dispatch<React.SetStateAction<string | null>>;
  text?: string | null;
}

function verifyStringContainsOnce(array: string[], string?: string | null) {
  if (string && array) {
    const filteredArray = array.filter(word =>
      string.toLowerCase().includes(word.toLowerCase()),
    );
    return filteredArray.length > 0;
  } else {
    return false;
  }
}

export default function PopUp({setMessage, text}: Props) {
  const TextRestrict = ['nenhum', 'sem acesso a', 'não definid'];
  const showHeader = verifyStringContainsOnce(TextRestrict, text);

  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        {!showHeader && (
          <Text style={[globalStyle.h75, globalStyle.center]}>Atenção!</Text>
        )}
        <Text
          style={[
            globalStyle.h55,
            globalStyle.center,
            globalStyle.HighPadding,
          ]}>
          {text && text[0].toLocaleUpperCase() + text.slice(1)}
        </Text>
        {!showHeader && (
          <Pressable
            style={[globalStyle.ButtonContainer]}
            onPress={() => {
              setMessage(null);
            }}>
            <Text style={[globalStyle.ButtonText]}>Confirmar</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,
    backgroundColor: 'rgba(255,255,255,1)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  messageBox: {
    textAlign: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
    minHeight: '50%',
  },
  messageText: {
    borderRadius: 5,
    marginBottom: 20,
    color: '#000',
    fontWeight: '700',
    fontSize: width * 0.055,
  },
});
