import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonPress from '../../../../../components/ButtonPress';
import {Context} from '../../../../../../AppContextProvider';
import ScrollContainer from '../../../../../components/ScrollContainer';
import Categoria from './Categoria';
import ButtonIcon from '../../../../../components/ButtonIcon';
import ViewContainer from '../../../../../components/ViewContainer';
import {Avatar, Card, IconButton} from 'react-native-paper';
import InputNormal from '../../../../../components/InputNormal';

export default function Escopo({navigation, route}) {
  const ctx = useContext(Context);
  const [useData, setData] = useState([]);
  const [useError, setError]= useState(false);
  const [useLoading, setLoading] = useState(false);
  const [useVisible, setVisible]= useState(false);
  const [useNameCategory, setNameCategory] = useState('');
  const [useLevel, setLevel] = useState('');

  async function save() {
    console.log('save');
  }

  useEffect(() =>{
    console.log(route.params);
    setLoading(true);
  }, []);
  function removeCategory(e) {
    setData(useData.filter((data) => data.id !== e.id));
    console.log(e);
  }

  function newCategory(nameCategory, level ) {
    const data = useData;
    const idLevel0 = data.length;
    console.log(data[idLevel0]);
    if (level === 0) {
      data.push({
        nome: nameCategory || useNameCategory,
        id: data.length + 1,
        subCategoria: [],
      });
    }
    console.log(data);
    setData(data);
    /*
    [{
      name:'',
      subcatgoria : [
        level 0 [{id: 0, name: ''},{id: 1, name: ''},{id: 2, name: ''}],
        level 1 [{id: 0, name: ''},{id: 1, name: ''},{id: 2 , name: ''}],
        level 2 [{id: 0, name: ''},{id: 1, name: ''},{id: 2 , name: ''}],
      ]
    },
       catgoria 2 [
        level 0 [{id: 0, name: ''},{id: 1, name: ''},{id: 2, name: ''}],
        level 1 [{id: 0, name: ''},{id: 1, name: ''},{id: 2 , name: ''}],
        level 2 [{id: 0, name: ''},{id: 1, name: ''},{id: 2 , name: ''}],
      ],
    ];
    */
    setNameCategory('');
    setVisible(false);
  }
  function SubCategoryView({index, data, item, level}) {
    if (useVisible[index] === true) {
      return (
        <ViewContainer useLoading={true} >
          <InputNormal
            value={useNameCategory}
            onChangeText={setNameCategory}
            placeholder="Nova categoría"
          />
          <ButtonPress
            onPress={()=>{
              newCategory(useNameCategory, level);
            }}
            title={'Adicionar'}
          />
        </ViewContainer>
      );
    } else {
      return <></>;
    }
  }
  return (
    <ScrollContainer useLoading={useLoading} useError={useError}>
      <ViewContainer useLoading={useLoading} useError={useError}>
        {
          useData.length > 0 && useData.map((data, level)=>(
            <View key={data.id}>
              <Card.Title
                style={{justifyContent: 'space-between', width: '100%'}}
                titleStyle={styles.text}
                mode="outlined"
                title={data.nome}
                left={(props) => <Avatar.Text size={15} {...props} style={styles.icon} label={String(data.id)} color="white" />}
                right={(props) =>
                  <View style={{flexDirection: 'row'}}>
                    <IconButton {...props} icon={'close'} onPress={()=> removeCategory(data)}/>
                    <IconButton {...props} icon={'plus'} onPress={()=> {
                      setVisible(true);
                      setLevel(1);
                    }}/>
                  </View>
                }/>
            </View>
          ))
        }
        <Categoria newCategory={newCategory}/>
        <SubCategoryView />
      </ViewContainer>

      <ButtonPress
        onPress={save}
        title={route.params.data?'Atualizar':'Salvar'}
      />
    </ScrollContainer>
  );
};

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
    padding: 5,
    height,
    width,
  },
});
