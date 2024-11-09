import {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import ButtonConfirm from '../../../../components/ButtonConfirm/ButtonConfirm';
import ContainerScreen from '../../../../components/ContainerScreen';
import useAppContext from '../../../../context';
import globalStyle from '../../../../styles/Fontes';

const EditAccountScreen = ({navigation}: any) => {
  const {client} = useAppContext();
  const [pixKey, SetPixkey] = useState('');
  const [CPF, setCPF] = useState('');
  const [isMessage, setMessage] = useState<string | null>(null);
  const handleSaveChanges = () => {
    console.log('client', client);
    navigation.navigate('MyAccount');
  };

  const verify = () => {
    return true;
  };
  return (
    <ContainerScreen isLoading setMessage={setMessage} isMessage={isMessage}>
      <View style={globalStyle.container}>
        <Text style={globalStyle.h85}>Atualizar informações</Text>
        <Text style={globalStyle.h50}>
          Adicione seu CPF para receber seus ganhos!
        </Text>
        <View style={globalStyle.form}>
          <Text style={globalStyle.label}>Chave Pix</Text>
          <TextInput
            style={globalStyle.input}
            value={pixKey}
            onChangeText={SetPixkey}
          />

          <Text style={globalStyle.label}>CPF</Text>
          <TextInput
            style={globalStyle.input}
            secureTextEntry
            value={CPF}
            onChangeText={setCPF}
          />
        </View>
        <ButtonConfirm
          title="Enviar"
          verify={verify}
          exec={handleSaveChanges}
          text={`
Tem certeza que deseja atualizar? 
        `}
        />
      </View>
    </ContainerScreen>
  );
};

export default EditAccountScreen;
