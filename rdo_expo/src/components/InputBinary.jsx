import Checkbox from 'expo-checkbox';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {global} from '../style/global';

export default function InputBinary({placeholder, value, onValueChange, list}) {
  const [useData1, setData1] = useState(false);
  const [useData2, setData2] = useState(false);
  useEffect(()=>{
    if (value.toUpperCase() === list[0].toUpperCase()) {
      setData1(true);
      setData2(false);
    } else {
      setData1(false);
      setData2(true);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{placeholder}</Text>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={useData1}
          onValueChange={(valueChange)=>{
            setData1(valueChange);
            setData2(!valueChange);
            if (valueChange === true) {
              onValueChange(list[0]);
            } else {
              onValueChange(list[1]);
            }
          }}
          color={'#4630EB'}
        />
        <Text style={styles.paragraph}>{list[0]}</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={useData2}
          onValueChange={(valueChange)=>{
            setData1(!valueChange);
            setData2(valueChange);
            if (valueChange === true) {
              onValueChange(list[1]);
            } else {
              onValueChange(list[0]);
            }
          }}
          color={'#4630EB'}
        />
        <Text style={styles.paragraph}>{list[1]}</Text>
      </View>
    </View>
  );
}

const width = global.width;
const styles = StyleSheet.create({
  container: {
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
    paddingBottom: 5,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
  text: {
    marginLeft: -10,
    zIndex: 2,
    elevation: 2,
    color: '#777',
  },
});
