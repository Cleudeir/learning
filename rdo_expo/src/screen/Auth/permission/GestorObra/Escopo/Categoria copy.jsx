import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {FAB, Portal, Provider, Text, Modal} from 'react-native-paper';
import InputNormal from '../../../../../components/InputNormal';
import ViewContainer from '../../../../../components/ViewContainer';

const Categ = () => {
  const [state, setState] = useState({open: false});
  const [useError, setError]= useState(false);
  const [useLoading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [useNome, setNome] = useState('');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', height: '100vh'};
  const onStateChange = ({open}) => setState({open});
  const {open} = state;

  useEffect(() =>{
    console.log('Categoria');
    setLoading(true);
  }, []);

  return (
    <ViewContainer useLoading={useLoading} useError={useError} >
      <Provider>
        <Portal>
          <FAB.Group
            icon={'plus'}
            actions={[]}
            onStateChange={onStateChange}
            onPress={showModal}
          />
        </Portal>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <InputNormal
              value={useNome}
              onChangeText={setNome}
              placeholder="Categoria da apropriação"
            />
          </Modal>
        </Portal>
      </Provider>
    </ViewContainer>
  );
};

export default Categoria;
