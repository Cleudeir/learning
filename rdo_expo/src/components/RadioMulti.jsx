import Checkbox from 'expo-checkbox';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {global} from '../style/global';

export default function RadioMulti({check, list, placeholder, value, onValueChange}) {
  return (
    <View style={styles.container}>
      <RadioButton.Group style={styles.Group} onValueChange={(newValue) => onValueChange(newValue)} value={value}>
        {list.map((item)=>(
          <RadioButton.Item key={item} labelStyle={styles.Group} label={item} value={item} color="#4630EB"/>
        ))}
      </RadioButton.Group>
    </View>
  );
}
const width = global.width;
const styles = StyleSheet.create({
  container: {
    margin: 8,
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
  },
  Group: {
    margin: 0,
    padding: 0,
  },
  Item: {
    fontSize: 14,
  },
});
