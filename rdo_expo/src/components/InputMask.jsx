import {TextInputMask} from 'react-native-masked-text';

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {global} from '../style/global';

export default function InputMask({value, placeholder, onChangeText, type, keyboardType, options}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{placeholder}</Text>
      <TextInputMask style={styles.input}
        placeholderTextColor="gray"
        leftIcon={{type: 'font-awesome', name: 'lock'}}
        keyboardType={'default' || keyboardType}
        onChangeText={onChangeText}
        type={type}
        value={value.toUpperCase()}
        options={options}
      />
    </View>
  );
}

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
    height: 50,
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
    paddingTop: 10,
  },
});
