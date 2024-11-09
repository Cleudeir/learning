import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import ContainerScreen from '../../../components/ContainerScreen';
import globalStyle from '../../../styles/Fontes';
import {PropsHome} from '../../Interface';
import Card from './Card';
import useIndex from './useIndex';

const HomeScreen: React.FC<PropsHome> = ({navigation}): JSX.Element => {
  const {
    matches,
    isMessage,
    isLoading,
    navigateToScreen,
    setMessage,
    setSearch,
    search,
  } = useIndex(navigation);

  return (
    <ContainerScreen
      isLoading={isLoading}
      isMessage={isMessage}
      setMessage={setMessage}>
      <View style={globalStyle.container}>
        <Text style={globalStyle.h75}>Olá, palpiteiro</Text>
        {matches && (
          <>
            <View style={styles.containerSearch}>
              <Text style={[styles.textJogosCount, globalStyle.h50]}>
                {matches.length} Jogos
              </Text>
              <View style={styles.ContainerInput}>
                <TextInput
                  style={styles.input}
                  onChangeText={setSearch}
                  value={search}
                />
                <FontAwesomeIcon
                  style={styles.iconInput}
                  icon={faMagnifyingGlass}
                  color="#000"
                  size={20}
                />
              </View>
            </View>
            {matches.map(item => (
              <Card
                item={item}
                navigateToScreen={navigateToScreen}
                key={item.matchId}
              />
            ))}
          </>
        )}
      </View>
    </ContainerScreen>
  );
};

const styles = StyleSheet.create({
  containerSearch: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    width: '100%',
    marginVertical: 20,
    flex: 1,
  },
  textDate: {
    fontSize: 16,
    color: '#333',
    flexWrap: 'wrap',
    alignSelf: 'center',
    textAlign: 'center',
  },
  textJogosCount: {
    width: '20%',
  },
  ContainerInput: {
    fontSize: 16,
    color: '#333',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  input: {
    width: '95%',
    textAlign: 'right',
    paddingRight: 43,
    fontSize: 20,
    color: '#000',
  },
  iconInput: {
    marginLeft: -40,
    color: '#000',
  },
});
export default HomeScreen;
