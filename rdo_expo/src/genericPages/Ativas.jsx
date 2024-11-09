import React, {useState, useEffect, useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import ButtonIcon from '../components/ButtonIcon';
import ScrollContainer from '../components/ScrollContainer';
import {Context} from '../../AppContextProvider';
import {Button} from 'react-native-paper';
import ViewContainer from '../components/ViewContainer';


export default function Ativas({navigation, route}) {
  const [useAtiva, setAtiva] = useState(false);
  const [useInativa, setInativa] = useState(false);
  const [useLoading, setLoading] = useState(false);
  const ctx = useContext(Context);

  useEffect(() => {
    console.log(route.params);
    const ativa = [];
    const inativa = [];

    ctx[route.params.name].map((x)=>{
      if (x.situacao === 'ATIVA') {
        ativa.push(x);
      } else {
        inativa.push(x);
      }
    });
    setAtiva(ativa);
    setInativa(inativa);
    setLoading(true);
  }, [ctx]);

  return (
    <ScrollContainer useLoading={useLoading}>
      <ViewContainer useLoading={useLoading}>
        <Text style={styles.text}>{route.params.name.toUpperCase()}</Text>

        <View style={{flexDirection: 'row', verticalAlign: 'center'}}>
          <Button icon="note-multiple-outline"
            labelStyle={{fontSize: 30, color: 'orange'}}
            onPress={() => {
              navigation.navigate({
                name: `Inativas`,
                params: {
                  data: useInativa,
                  name: route.params.name,
                  icon: route.params.icon,
                },
              });
            }}
            underlayColor='#fff'>
            <Text style={styles.text}>inativas</Text>
          </Button>
          <Button icon="note-plus-outline"
            labelStyle={{fontSize: 30, color: 'green'}}
            onPress={() => {
              navigation.navigate({name: `${route.params.name}`,
                params: {
                  name: route.params.name,
                  icon: route.params.icon,
                }});
            }}
            underlayColor='#fff'>
            <Text style={styles.text}>adicionar</Text>
          </Button>

        </View>
        <View style={styles.iconsContainer}>
          {useAtiva && useAtiva.map((data, i) => {
            return (
              <ButtonIcon key={i}
                title={data.nome}
                onPress={() => {
                  navigation.navigate({
                    name: `${route.params.name}`,
                    params: {
                      data,
                      name: route.params.name,
                      icon: route.params.icon,
                    },
                  });
                }
                }
                icon={route.params.icon} />
            );
          })
          }
        </View>
      </ViewContainer>
    </ScrollContainer>
  );
};
