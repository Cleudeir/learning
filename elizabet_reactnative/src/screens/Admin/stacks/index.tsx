import {faList, faPlus, faUsers} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ContainerScreen from '../../../components/ContainerScreen';
import useAppContext from '../../../context';
import {PropsConfigLogin} from '../../Interface';

const AdminHomeScreen: React.FC<PropsConfigLogin> = ({navigation}) => {
  const context = useAppContext();
  const [isMessage, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (context.client?.permission !== 'admin') {
        navigation.goBack();
      }
    });
    return unsubscribe;
  }, [navigation, context]);

  const navigateToNewMatch = () => {
    navigation.navigate('NewMatch');
  };

  const navigateToMatches = () => {
    navigation.navigate('Matches');
  };

  const navigateToClients = () => {
    navigation.navigate('Clients');
  };

  return (
    <ContainerScreen isLoading setMessage={setMessage} isMessage={isMessage}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, styles.borderBox]}
          onPress={navigateToNewMatch}>
          <FontAwesomeIcon icon={faPlus} style={styles.buttonIcon} size={24} />
          <Text style={styles.buttonText}>Adicionar Partida</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.borderBox]}
          onPress={navigateToMatches}>
          <FontAwesomeIcon icon={faList} style={styles.buttonIcon} size={24} />
          <Text style={styles.buttonText}>Ver Partidas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.borderBox]}
          onPress={navigateToClients}>
          <FontAwesomeIcon icon={faUsers} style={styles.buttonIcon} size={24} />
          <Text style={styles.buttonText}>Ver Clientes</Text>
        </TouchableOpacity>
      </View>
    </ContainerScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    marginBottom: 20,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  borderBox: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
  },
  buttonIcon: {
    marginRight: 15,
    color: '#444',
  },
  buttonText: {
    color: '#444',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AdminHomeScreen;
