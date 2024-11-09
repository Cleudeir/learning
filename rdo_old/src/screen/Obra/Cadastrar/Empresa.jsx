import {View, Text, Button, ScrollView} from 'react-native';
import styles from '../../../../style/MainStyle';
import React, {useContext} from 'react';
import Input from '../../../components/Input';
import InputMask from '../../../components/InputMask';
import {Context} from '../../../contexts/Context';

export default function Colaborador() {
	const {dataObra} = useContext(Context);
	// Nome Nome Responsavel
	const [useNomeResponsavel, setNomeResponsavel] = React.useState(null);
	const [useErrorNomeResponsavel, setErrorNomeResponsavel] = React.useState(null);
	// Nome Nome Fantasia
	const [useNomeFantasia, setNomeFantasia] = React.useState(null);
	const [useErrorNomeFantasia, setErrorNomeFantasia] = React.useState(null);
	// Razao Social
	const [useRazaoSocial, setRazaoSocial] = React.useState(null);
	const [useErrorRazaoSocial, setErrorRazaoSocial] = React.useState(null);
	// CNPJ
	const [useCNPJ, setCNPJ] = React.useState(null);
	const [useErrorCNPJ, setErrorCNPJ] = React.useState(null);
	// Email
	const [useEmail, setEmail] = React.useState();
	const [useErrorEmail, setErrorEmail] = React.useState(null);
	// Telefone Celular
	const [useTelefoneCelular, setTelefoneCelular] = React.useState(null);
	const [useErrorTelefoneCelular, setErrorTelefoneCelular] = React.useState(null);
	// Telefone Fixo
	const [useTelefoneFixo, setTelefoneFixo] = React.useState(null);
	const [useErrorTelefoneFixo, setErrorTelefoneFixo] = React.useState(null);

	const sendData = () => {
		// Verificar NomeResponsavel
		if (!useNomeResponsavel) {
			setErrorNomeResponsavel('Preencha o campo');
		}

		// Verificar NomeFantasia
		if (!useNomeFantasia) {
			setErrorNomeFantasia('Preencha o campo');
		}

		// Verificar RazaoSocial
		if (!useRazaoSocial) {
			setErrorRazaoSocial('Preencha o campo');
		}

		// Verificar CPF
		if (!useCNPJ) {
			setErrorCNPJ('Preencha o campo');
		} else if (useCNPJ.length < 18) {
			setErrorCNPJ('CNPJ Invalido');
		}

		// Email
		if (useEmail) {
			const [a, b] = useEmail.split('@');
			console.log(a, b);
			if (!a || !b) {
				setErrorEmail('Preencha corretamente');
			} else {
				setErrorEmail('Preencha o campo');
			}
		} else {
			setErrorEmail('Preencha o campo');
		}

		// Telefone celular
		if (!useTelefoneCelular) {
			setErrorTelefoneCelular('Preencha o campo');
		} else if (useTelefoneCelular.length < 16) {
			setErrorTelefoneCelular('Preencha corretamente');
		}

		// Telefone celular
		if (!useTelefoneFixo) {
			setErrorTelefoneFixo('Preencha o campo');
		} else if (useTelefoneFixo.length < 14) {
			setErrorTelefoneFixo('Preencha corretamente');
		}

		// Send Informações
		if (useNomeResponsavel
			&& useRazaoSocial
			&& useNomeFantasia
			&& useCNPJ.length === 18
			&& useEmail.split('@')[1]
			&& useTelefoneCelular.length === 16
			&& useTelefoneFixo.length === 14
		) {
			const send = {
				nomeResponsavel: useNomeResponsavel,
				nomeFantasia: useRazaoSocial,
				razaoSocial: useRazaoSocial,
				cnpj: useCNPJ,
				email: useEmail,
				telefoneFixo: useTelefoneFixo,
				telefoneCelular: useTelefoneCelular,
				obraId: dataObra.obraId,
			};
			console.log(send);
		}
	};

	React.useEffect(() => {
		// NomeResponsavel
		setErrorNomeResponsavel(null);
		// NomeFantasia
		setErrorNomeFantasia(null);
		// RazaoSocial
		setErrorRazaoSocial(null);
		// CPF
		setErrorCNPJ(null);
		// Email
		setErrorEmail(null);
		// Telefone Celular
		setErrorTelefoneCelular(null);
		// Telefone fixo
		setErrorTelefoneFixo(null);
	}, [useNomeResponsavel, useRazaoSocial, useNomeFantasia, useCNPJ, useEmail, useTelefoneCelular]);

	return (
		<ScrollView horizontal={false} style={{flex: 1}} >
			<ScrollView horizontal={true} style={{flex: 1}} contentContainerStyle={{flex: 1}}>
				<View style={{width: '100%'}}>
					<Text style={styles.title}>Cadastre</Text>
					<Input
						placeholder="Nome do Responsavel"
						onChangeText={setNomeResponsavel}
						textError={useErrorNomeResponsavel}
					/>
					<Input
						placeholder="Nome fantasia"
						onChangeText={setNomeFantasia}
						textError={useErrorNomeFantasia}
					/>
					<Input
						placeholder="Razão Social"
						onChangeText={setRazaoSocial}
						textError={useErrorRazaoSocial}
					/>

					<InputMask
						placeholder="CNPJ"
						type={'cnpj'}
						onChangeText={setCNPJ}
						textError={useErrorCNPJ}
					/>
					<Input
						placeholder="Email"
						onChangeText={setEmail}
						keyboardType="email-address"
						textError={useErrorEmail}
					/>
					<InputMask
						placeholder="Telefone Fixo"
						type={'custom'}
						options={{mask: '(99) 9999 9999'}}
						keyboardType="numeric"
						onChangeText={setTelefoneFixo}
						textError={useErrorTelefoneFixo}
					/>
					<InputMask
						placeholder="Telefone Celular"
						type={'custom'}
						options={{mask: '(99) 9 9999 9999'}}
						keyboardType="numeric"
						onChangeText={setTelefoneCelular}
						textError={useErrorTelefoneCelular}
					/>
					<View style={{alignItems: 'center', width: '100%', margin: 10}}>
						<View style={{width: '40%', margin: 10}}>
							<Button title="Salvar" color={styles.timeButton.backgroundColor} onPress={sendData}/>
						</View>
					</View>
				</View>
			</ScrollView>
		</ScrollView>
	);
}
