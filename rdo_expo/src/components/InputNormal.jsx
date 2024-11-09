import {View, TextInput, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {global} from '../style/global';
export default function InputNormal({value, placeholder, onChangeText, textError, keyboardType, height}) {
  const width = global.width;
  const styles = StyleSheet.create({
    container: {
      padding: 8,
    },
    text: {
      marginBottom: -20,
      zIndex: 2,
      elevation: 2,
      paddingLeft: 10,
      color: '#777',
    },
    input: {
      height: height | 50,
      width,
      borderRadius: 8,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
      fontSize: 14,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{placeholder}</Text>
      <TextInput
        multiline={Boolean(height)}
        value={value.toUpperCase()}
        style={styles.input}
        label="TextInput"
        placeholderTextColor="gray"
        onChangeText={(text) => {
          onChangeText(text);
        }}
      />
    </View>
  );
}


