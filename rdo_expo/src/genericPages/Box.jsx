import React, {useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import ButtonIcon from '../components/ButtonIcon';
import {styles} from './styles';
import ViewContainer from '../components/ViewContainer';

export default function Box({navigation, params}) {
  const [useError, setError]= useState(false);
  return (
    <ViewContainer useLoading={true} useError={useError}>
      <Text style={styles.text}>{params.title}</Text>
      {
        <View style={styles.iconsContainer}>
          {
            params && params.itens.map((data)=> (
              <ButtonIcon key={data.name}
                title={`${data.name}`}
                onPress={ ()=>{
                  navigation.navigate({
                    name: data.screen,
                    params: data,
                  });
                }}
                icon={data.icon}/>
            ) ) }
        </View>
      }
    </ViewContainer>);
}
