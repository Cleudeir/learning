import Checkbox from 'expo-checkbox';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {global} from '../style/global';

export default function InputMulti({check, list, placeholder, value, onValueChange}) {
  const [useValue, setValue] = useState(false);
  useEffect(()=>{
    const createList = [];
    for (let index=0; index < list.length; index++) {
      const checkArray = check || [];
      const verify = checkArray.includes(list[index]);
      createList.push({check: verify, id: index, item: list[index]});
    }
    setValue(createList);
  }, []);

  useEffect(()=>{
    if (value.length >= 0) {
      const createList = [];
      for (let index=0; index < list.length; index++) {
        const verify = value.includes(list[index]);
        createList.push({check: verify, id: index, item: list[index]});
      }
      setValue(createList);
    }
  }, [value]);

  function valueFilter(props) {
    const [{check}] = useValue.filter((x)=>x.id === props);
    return check;
  }

  function valueChange(_value, index) {
    const filter = useValue.filter((x)=>x.id !== index);
    const checkValue = [...filter, {check: _value, id: index, item: useValue[index].item}];
    onValueChange(checkValue.filter((x)=>x.check === true).map((x)=>x.item));
    return _value;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{placeholder}</Text>
      {
        useValue && list.map((box, index) => {
          return (
            <View key={index} style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={valueFilter(index)}
                onValueChange={(_value)=>valueChange(_value, index)}
                color={'#4630EB'}
              />
              <Text style={styles.paragraph}>{String(box)}</Text>
            </View>
          );
        })
      }
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
