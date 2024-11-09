/* eslint-disable max-len */
import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {Avatar, Card, Divider, IconButton} from 'react-native-paper';

export default function ButtonIcon({onPress, title, subtitle, icon, backgroundColor}) {
  const [useBackgroundColor, setBackgroundColor] = useState(backgroundColor ||'#37e');
  const [size, setSize] = useState(35);
  return (
    <View style={styles.container} >
      <Divider />
      <Pressable onPress={onPress}>
        <Card.Title
          titleStyle={styles.text}
          mode="outlined"
          title={title.slice(0, 25)}
          subtitle={subtitle || ''}
          left={(props) => <Avatar.Icon {...props} style={styles.icon} icon={icon} color="white"/>}
          right={(props) => <IconButton {...props} icon={'chevron-right'} />}
        />
      </Pressable>
      <Divider />
    </View>
  );
}

const width = 320;
const height = 80;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width,
  },
  text: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  icon: {
    backgroundColor: '#37f',
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height,
    width,
  },
});
