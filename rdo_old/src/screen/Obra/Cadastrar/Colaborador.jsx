import {View, Text, Button, ScrollView} from 'react-native';
import styles from '../../../../style/MainStyle';
import React, {useContext} from 'react';
import AutoCompleteInput from '../../../components/AutoCompleteInput';
import Input from '../../../components/Input';
import InputMask from '../../../components/InputMask';
import {Context} from '../../../contexts/Context';

export default function Colaborador() {
	const {dataEmpresa, dataFuncao, dataObra} = useContext(Context);
	// Empresa
	const [useDataEmpresa] = React.useState(dataEmpresa.map(x => x.nomeFantasia));
	const [useEmpresa, setEmpresa] = React.useState(null);
	const [useSendEmpresa, setSendEmpresa] = React.useState(null);
	const [useErrorEmpresa, setErrorEmpresa] = React.useState(null);
	// Nome completo
	const [useNome, setNome] = React.useState(null);
	const [useErrorNome, setErrorNome] = React.useState(null);
	// Função
	const [useDataFuncao] = React.useState(dataFuncao);
	const [useFuncao, setFuncao] = React.useState(null);
	const [useSendFuncao, setSendFuncao] = React.useState(null);
	const [useErrorFuncao, setErrorFuncao] = React.useState(null);
	// CPF
	const [useCPF, setCPF] = React.useState(null);
	const [useErrorCPF, setErrorCPF] = React.useState(null);
	// Nacimento
	const [useNascimento, setNascimento] = React.useState(null);
	const [useErrorNascimento, setErrorNascimento] = React.useState(null);
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
		// Empresa
		if (!useEmpresa) {
			setErrorEmpresa('Preencha o campo');
		} else if (!useSendEmpresa) {
			setErrorEmpresa('Função não cadastrada');
		}

		// Verificar nome completo
		if (useNome) {
			const [a, b] = useNome.split(' ');
			console.log(a, b);
			if (!a || !b) {
				setErrorNome('Somente nome completo');
			}
		} else {
			setErrorNome('Preencha o campo');
		}

		// Verificar Função
		if (!useFuncao) {
			setErrorFuncao('Preencha o campo');
		} else if (!useSendFuncao) {
			setErrorFuncao('Função não cadastrada');
		}

		// Verificar CPF
		if (!useCPF) {
			setErrorCPF('Preencha o campo');
		} else if (useCPF.length < 14) {
			setErrorCPF('CPF Invalido');
		}

		// Nascimento
		if (!useNascimento) {
			setErrorNascimento('Preencha o campo');
		} else if (useNascimento.length < 10) {
			setErrorNascimento('Preencha corretamente');
		}

		// Email
		if (useEmail) {
			const [a, b] = useEmail.split('@');
			console.log(a, b);
			if (!a || !b) {
				setErrorEmail('Preencha corretamente');
			} else {
				setErrorEmail('Preencha corretamente');
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
		if (
			useEmpresa
			&& useNome
			&& useNome.split(' ')[1]
			&& useSendFuncao
			&& useCPF.length === 14
			&& useNascimento.length === 10
			&& useEmail.split('@')[1]
			&& useTelefoneCelular.length === 16
			&& useTelefoneFixo.length === 14
		) {
			const send = {
				nome: useNome,
				funcao: useSendFuncao,
				cpf: useCPF,
				nascimento: useNascimento,
				email: useEmail,
				telefoneFixo: useTelefoneFixo,
				telefoneCelular: useTelefoneCelular,
				empresaID: useSendEmpresa.empresaID,
				ObraId: dataObra.obraId,
			};
			console.log(send);
		}
	};

	React.useEffect(() => {
		// Empresa
		setSendEmpresa(null);
		const [emp] = dataEmpresa.filter(x => x.nomeFantasia === useEmpresa);
		if (emp) {
			setSendEmpresa(emp);
			setErrorEmpresa(null);
		}

		// Nome completo
		setErrorNome(null);

		// Funcao
		setSendFuncao(null);
		const [fun] = useDataFuncao.filter(x => x === useFuncao);
		if (fun) {
			setSendFuncao(fun);
			setErrorFuncao(null);
		}

		// CPF
		setErrorCPF(null);
		// Nascimento
		setErrorNascimento(null);
		// Email
		setErrorEmail(null);
		// Telefone Celular
		setErrorTelefoneCelular(null);
		// Telefone fixo
		setErrorTelefoneFixo(null);
	}, [useEmpresa, useFuncao, useNome, useCPF, useEmail, useNascimento, useTelefoneFixo, useTelefoneCelular]);

	return (
		<ScrollView horizontal={false} style={{flex: 1}} >
			<ScrollView horizontal={true} style={{flex: 1}} contentContainerStyle={{flex: 1}}>
				<View style={{width: '100%'}}>
					<Text style={styles.title}>Cadastre</Text>
					<AutoCompleteInput
						data={useDataEmpresa}
						placeholder="Empresa"
						value={useEmpresa}
						onChangeText={setEmpresa}
						textError={useErrorEmpresa}
					/>
					<Input textErrorStyle={styles.AutoCompletetextErrorStyle}
						placeholder="Nome completo"
						onChangeText={setNome}
						textError={useErrorNome}
					/>
					<AutoCompleteInput
						data={useDataFuncao}
						placeholder="Função"
						value={useFuncao}
						onChangeText={setFuncao}
						textError={useErrorFuncao}
					/>
					<InputMask
						placeholder="CPF"
						type={'cpf'}
						onChangeText={setCPF}
						textError={useErrorCPF}
					/>
					<InputMask
						placeholder="Data de nascimento"
						type={'datetime'}
						options={{format: 'DD/MM/YYYY'}}
						keyboardType="numeric"
						onChangeText={setNascimento}
						textError={useErrorNascimento}
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
