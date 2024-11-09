import {View, Image, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import {global} from '../style/global';


export default function ViewContainer({children, useLoading, useError}) {
  const [useWindow, setWindow] = useState(Dimensions.get('window'));
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setWindow(window);
    });
    return () => subscription?.remove();
  });


  const styles = StyleSheet.create({
    container: global.container,
    box: {
      alignItems: 'center',
      width: useWindow.width-20,
      justifyContent: 'center',
      margin: 10,
      paddingHorizontal: 12,
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
      minHeight: 200,
    },
    iconsContainer: global.iconsContainer,
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
      textTransform: 'uppercase',
      marginTop: 10,
    },
  });

  return (
    <View style={styles.box}>
      {useLoading && children}
      {
        !useLoading && <View>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: 'cover',
            }}
            source={require('../assets/Loading_icon.gif')}
          />
        </View>
      }
      {
        useError && typeof useError === 'object' && useError.map((erro, i)=>{
          return (
            <Text style={{alignSelf: 'flex-start', color: 'red', fontSize: 12, marginLeft: 'auto', marginRight: 'auto'}} key={i}>{useError}</Text>
          );
        })
      }
      {
        useError && typeof useError === 'string' &&
            <Text style={{alignSelf: 'flex-start', color: 'red', fontSize: 12, marginLeft: 'auto', marginRight: 'auto'}} key={i}>
              {useError}
            </Text>
      }
    </View>
  );
}


