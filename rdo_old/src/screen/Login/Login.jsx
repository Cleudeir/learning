import {TextInput, View, Text, Pressable} from 'react-native';
import React, {useContext} from 'react';
import {useState} from 'react';
import styles from '../../../style/MainStyle';
import {Context} from '../../contexts/Context';

export default function Login({navigation}) {
	const {signed, logar, user, env} = useContext(Context);
	const [email, setEmail] = useState(null);
	const [passwd, setPasswd] = useState(null);

	async function entrar() {
		console.log('click');
		await logar({email, passwd});
	}

	return (
		<View style={styles.container}>
			<Text style={styles.h1}>Bem vindo {'\n'} Faça seu Login!</Text>
			<TextInput
				style={styles.LoginInput}
				placeholder="E-mail"
				leftIcon={{type: 'font-awesome', name: 'envelope'}}
				onChangeText={value => setEmail(value)}
				keyboardType="email-address"
			/>
			<TextInput
				style={styles.LoginInput}
				placeholder="Sua senha"
				leftIcon={{type: 'font-awesome', name: 'lock'}}
				onChangeText={value => setPasswd(value)}
				secureTextEntry={true}
			/>
			<Pressable style={styles.button} onPress={() => entrar()}>
				<Text style={styles.buttonText}>Entrar</Text>
			</Pressable>
			<Pressable style={{}} onPress={() => {
				navigation.navigate({
					name: 'Signup',
				});
			}}>
				<Text style={{color: 'blue'}}>Criar conta</Text>
			</Pressable>
		</View>
	);
}
