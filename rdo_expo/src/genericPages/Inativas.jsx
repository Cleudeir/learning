import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import ButtonIcon from '../components/ButtonIcon';
import ScrollContainer from '../components/ScrollContainer';
import {styles} from './styles';

export default function Inativas({navigation, route}) {
  const [useData, setData]= useState(false);
  const [useLoading, setLoading] = useState(false);
  useEffect(()=>{
    setData(route.params.data);
    console.log(route.params);
    setLoading(true);
  }, [route]);

  return (
    <ScrollContainer useLoading={useLoading}>
      <View style={styles.box}>
        <Text style={styles.text}>{route.params.name.toUpperCase()}</Text>
        <View style={styles.iconsContainer}>
          {
            useData && useData.map((data, i)=>{
              return (
                <ButtonIcon key={i}
                  title={data.nome}
                  onPress={()=>{
                    navigation.navigate({
                      name: `${route.params.name}`,
                      params: {
                        data,
                        name: route.params.name,
                        icon: route.params.icon,
                      },
                    });
                  }}
                  icon={route.params.icon}/>
              );
            })
          }{
            useData.length===0 &&<View>
              <Text>Nada encontrado!</Text>
            </View>
          }
        </View>
      </View>
    </ScrollContainer>
  );
};
