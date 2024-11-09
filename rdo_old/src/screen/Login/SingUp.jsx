import {TextInput, View, Text, Pressable} from 'react-native';
import React from 'react';
import {useState} from 'react';
import styles from '../../../style/MainStyle';

export default function SingUp({navigation}) {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	function entrar() {
		console.log('Entrar');
		navigation.reset({
			index: 0,
			routes: [{
				name: 'Principal',
				params: {
					permissao: 'administrativo',
					obra: ['Alagoa', 'chalé'],
				}}],
		});
	}

	return (
		<View style={styles.container}>
			<Text style={styles.h1}>Bem vindo {'\n'} Faça seu cadastro!</Text>
		</View>
	);
}
