import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import login from '../screen/Login/Login';
import React from 'react';
import Signup from '../screen/Login/Signup';

const Stack = createNativeStackNavigator();
const screenOptions = {
	HeaderStyle: {
		backgroundColor: '#ff1',
	},
};

export default function NoAuth() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="login" component={login} options={screenOptions} />
			<Stack.Screen name="Signup" component={Signup} options={screenOptions} />
		</Stack.Navigator>
	);
}

