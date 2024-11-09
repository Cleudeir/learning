import React, {useState, useEffect} from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {FAB, Portal, Provider, Text, Modal, IconButton, Divider, Card, Avatar} from 'react-native-paper';
import InputNormal from '../../../../../components/InputNormal';
import ViewContainer from '../../../../../components/ViewContainer';
import {Dimensions} from 'react-native';
import ButtonPress from '../../../../../components/ButtonPress';
import ButtonIcon from '../../../../../components/ButtonIcon';
const Categoria = ({newCategory}) => {
  const [useError, setError]= useState(false);
  const [useNameCategory, setNameCategory] = useState('');
  const [useNewCategoryVisible, setNewCategoryVisible] = useState(false);
  const [useWindow, setWindow] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window, screen}) => {
      setWindow(window);
    });
    return () => subscription?.remove();
  });

  function addCategory() {
    newCategory(useNameCategory, 0);
    setNameCategory('');
    setNewCategoryVisible(false);
  }

  return (
    <>
      {useNewCategoryVisible &&
      <ViewContainer useLoading={true} >
        <InputNormal
          value={useNameCategory}
          onChangeText={setNameCategory}
          placeholder="Nova categoría"
        />
        <ButtonPress
          onPress={addCategory}
          title={'Adicionar'}
        />
      </ViewContainer>}
      {!useNewCategoryVisible &&
      <Pressable onPress={()=> setNewCategoryVisible(true)}>
        <Avatar.Icon style={{
          backgroundColor: '#37f',
          margin: 10,
        }} icon='plus' color="white"/>
      </Pressable>}
    </>
  );
};
export default Categoria;
