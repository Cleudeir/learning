import {View} from 'react-native';
import {TextInput} from 'react-native-element-textinput';
import React from 'react';
import {StyleSheet} from 'react-native';
export default function InputNormal({value, placeholder, onChangeText, textError, keyboardType, style}) {
  return (

    <TextInput
      style={ style || styles.input}
      inputStyle={styles.inputStyle}
      labelStyle={styles.labelStyle}
      placeholderStyle={styles.placeholderStyle}
      textErrorStyle={styles.textErrorStyle}
      leftIcon={{type: 'font-awesome', name: 'lock'}}
      placeholderTextColor="gray"
      value={value}
      placeholder={placeholder}
      onChangeText={(e) => {
        onChangeText(e);
      }}
      TextStyle={styles.textStyle}
      textError= {textError}
      keyboardType={keyboardType || 'default'}
    />

  );
}
const width = 350;
const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
  },
  input: {
    height: 55,
    width,
    paddingLeft: 10,
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
    marginBottom: 5,
    marginTop: 5,
  },
  inputStyle: {
    flex: 1,
    width: (width-30),
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: -30,
  },
  labelStyle: {
    fontSize: 14,
    position: 'absolute',
    top: -10,
    backgroundColor: 'white',
    paddingHorizontal: 4,
    marginLeft: -4,
  },
  placeholderStyle: {
    fontSize: 2,
    marginLeft: 10,
  },
  textErrorStyle: {
    fontSize: 14,
    color: 'red',
  },
});

