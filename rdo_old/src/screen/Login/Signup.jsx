import {TextInput, View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from '../../../style/MainStyle';
import {Context} from '../../contexts/Context';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import fireBaseStart from '../../../fireBaseConfig';

export default function Signup() {
	const {signed, logar, user, env} = React.useContext(Context);
	const [email, setEmail] = React.useState(null);
	const [password, setPassword] = React.useState(null);

	async function criar() {
		await fireBaseStart();
		const auth = getAuth();
		if (email && password) {
			createUserWithEmailAndPassword(auth, email, password)
				.then(userCredential => {
				// Signed in
					const {user} = userCredential;
				// ...
				})
				.catch(error => {
					const errorCode = error.code;
					const errorMessage = error.message;
				// ..
				});
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.h1}>Crie seu cadastro</Text>
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
				onChangeText={value => setPassword(value)}
				secureTextEntry={true}
			/>
			<Pressable style={styles.button} onPress={() => criar()}>
				<Text style={styles.buttonText}>Criar</Text>
			</Pressable>
		</View>
	);
}
