import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './src/routes/Routes';
import ContextProvider from './src/contexts/Context';
import {LogBox} from 'react-native';

export default function App() {
	LogBox.ignoreLogs(['Remote debugger']);
	return (
		<NavigationContainer styles={styles.container}>
			<ContextProvider>
				<Routes/>
			</ContextProvider>
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
