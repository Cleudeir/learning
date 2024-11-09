import {Picker} from '@react-native-picker/picker';
import {Text, TextInput, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ButtonConfirm from '../../../components/ButtonConfirm/ButtonConfirm';
import ContainerScreen from '../../../components/ContainerScreen';
import globalStyle from '../../../styles/Fontes';
import TransformDate from '../../../utils/TransformDate';
import {stadiums, teamNames} from '../../../utils/lists';
import useIndex from './useIndex';

const NewEditMatch: React.FC<any> = ({navigation, route}) => {
  const {
    homeTeamName,
    setHomeTeamName,
    awayTeamName,
    setAwayTeamName,
    matchDate,
    showDatePicker,
    setShowDatePicker,
    isMessage,
    setMessage,
    createUpdateMatch,
    verify,
    handleDateConfirm,
    handleDateCancel,
    isLoading,
    local,
    setLocal,
  } = useIndex({navigation, route});
  const date = route.params?.matchDate
    ? new Date(route.params.matchDate)
    : new Date();
  return (
    <ContainerScreen
      isLoading={isLoading}
      isMessage={isMessage}
      setMessage={setMessage}>
      <View style={globalStyle.container}>
        <Text style={globalStyle.h85}>Cadastro</Text>
        <Text style={globalStyle.h50}>
          Vamos, {route.params ? 'Atualizar' : 'Adicionar'} informações da
          partida
        </Text>
        <View style={globalStyle.form}>
          <Text style={globalStyle.label}>Nome do Time da Casa</Text>
          <View style={globalStyle.input}>
            <Picker
              style={globalStyle.picker}
              selectedValue={homeTeamName}
              onValueChange={itemValue => setHomeTeamName(itemValue)}>
              {teamNames.map((teamName, index) => (
                <Picker.Item key={index} label={teamName} value={teamName} />
              ))}
            </Picker>
          </View>
          <Text style={globalStyle.label}>Nome do Time de Fora</Text>
          <View style={globalStyle.input}>
            <Picker
              style={globalStyle.picker}
              selectedValue={awayTeamName}
              onValueChange={itemValue => setAwayTeamName(itemValue)}>
              {teamNames.map((value, index) => (
                <Picker.Item key={index} label={value} value={value} />
              ))}
            </Picker>
          </View>
          <Text style={globalStyle.label}>Local da Partida</Text>
          <View style={globalStyle.input}>
            <Picker
              style={globalStyle.picker}
              selectedValue={local}
              onValueChange={itemValue => setLocal(itemValue)}>
              {stadiums.map((value, index) => (
                <Picker.Item key={index} label={value} value={value} />
              ))}
            </Picker>
          </View>
          <Text style={globalStyle.label}>Data da Partida</Text>
          <TextInput
            style={globalStyle.input}
            value={TransformDate(matchDate)}
            onTouchStart={() => setShowDatePicker(true)}
            editable={true}
          />
          <DateTimePickerModal
            isVisible={showDatePicker}
            mode="datetime"
            date={date}
            onConfirm={handleDateConfirm}
            onCancel={handleDateCancel}
            is24Hour={true}
          />
        </View>
        <ButtonConfirm
          text={
            route.params
              ? 'Tem certeza que deseja Atualizar?'
              : 'Tem certeza que deseja adicionar Partida?'
          }
          title={route.params ? 'Atualizar' : 'Adicionar'}
          verify={verify}
          exec={createUpdateMatch}
        />
      </View>
    </ContainerScreen>
  );
};

export default NewEditMatch;
