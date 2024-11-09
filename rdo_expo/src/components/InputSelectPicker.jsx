import RNPickerSelect from 'react-native-picker-select';
import React from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import {global} from '../style/global';

export default function InputSelectPicker({value, placeholder, onValueChange, items}) {
  console.log(Platform.OS);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{placeholder}</Text>
      <RNPickerSelect style={styles.select}
        onValueChange={(data)=>{
          console.log(data);
          onValueChange(data);
        }}
        items={items}
        value={value.toUpperCase()}
      />
    </View>
  );
}
const width = global.width;
let styleOs = {
  container: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width,
    height: 50,
    borderRadius: 8,
    fontSize: 14,
    paddingTop: 10,
    margin: 8,
  },
  text: {
    marginBottom: -10,
    zIndex: 2,
    elevation: 2,
    paddingLeft: 10,
    color: '#777',
  },
  select: {
    fontSize: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
    color: 'black',
  },
};
if (Platform.OS ==='web') {
  styleOs = {
    container: {
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'center',
      width,
      height: 50,
      borderRadius: 8,
      fontSize: 14,
      paddingTop: 10,
      paddingBottom: 5,
      margin: 8,
    },
    text: {
      marginTop: -5,
      marginBottom: 2,
      zIndex: 2,
      elevation: 2,
      paddingLeft: 10,
      color: '#777',
    },
    select: {
      fontSize: 10,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 8,
      color: 'black',
      marginBottom: 10,
      width,
    },
  };
}
const styles = StyleSheet.create(styleOs);
