import {faSignOut, faUserPen} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ContainerScreen from '../../../components/ContainerScreen';
import globalStyle from '../../../styles/Fontes';
import {PropsConfigLogin} from '../../Interface';
import useIndex from './useIndex';

const UserHomeScreen: React.FC<PropsConfigLogin> = ({navigation, route}) => {
  const {
    isMessage,
    setMessage,
    LogOut,
    version,
    versionType,
    navigateToEditAccount,
  } = useIndex({
    navigation,
    route,
  });

  return (
    <ContainerScreen isLoading setMessage={setMessage} isMessage={isMessage}>
      <View style={styles.userContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToEditAccount}>
          <FontAwesomeIcon
            icon={faUserPen}
            style={styles.buttonIcon}
            size={50}
          />
          <Text style={styles.buttonText}>Editar Informações</Text>
        </TouchableOpacity>
        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.button} onPress={LogOut}>
            <FontAwesomeIcon
              icon={faSignOut}
              style={styles.buttonIcon}
              size={50}
            />
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        </View>
        <View style={[globalStyle.HighPadding, globalStyle.left]}>
          <Text style={globalStyle.h30}>Versão number: {version}</Text>
          <Text style={globalStyle.h30}>Tipo da versão: {versionType}</Text>
        </View>
      </View>
    </ContainerScreen>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  userText: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'flex-start',
  },
  containerButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    margin: 10,
    minWidth: '35%',
    height: 80,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'column',
    borderColor: '#444',
    borderWidth: 1,
  },
  buttonIcon: {
    color: '#444',
    textAlign: 'center',
  },
  buttonText: {
    color: '#444',
    fontSize: 12,
  },
  borderBox: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
  },
});

export default UserHomeScreen;
