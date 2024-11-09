import {View, Image, Text} from 'react-native';
import {ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export default function ScrollContainer({children, useLoading, useError}) {
  const [useWindow, setWindow] = useState(Dimensions.get('window'));
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setWindow(window);
    });
    return () => subscription?.remove();
  });

  return (
    <ScrollView horizontal={false} style={{flex: 1, width: useWindow.width}} >
      <ScrollView horizontal={true} style={{flex: 1}} contentContainerStyle={{flex: 1, minHeight: useWindow.height-85, width: useWindow.width}}>
        <View style={{
          flex: 1,
          backgroundColor: '#eee',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
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
      </ScrollView>
    </ScrollView>
  );
}
