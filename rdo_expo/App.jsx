import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/screen/Routes';
import React from 'react';
import AppContextProvider from './AppContextProvider';
import Firebase from './src/class/Firebase';

Firebase;

export default function App() {
  return (
    <NavigationContainer>
      <AppContextProvider>
        <Routes />
      </AppContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
