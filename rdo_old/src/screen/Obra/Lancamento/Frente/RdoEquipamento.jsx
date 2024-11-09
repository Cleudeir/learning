import {TextInput, View, Text, Image, Button, ScrollView} from 'react-native';
import styles from '../../../../../style/MainStyle';
import React, {useState, useEffect, useContext} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AutoCompleteInput from '../../../../components/AutoCompleteInput';
import {Context} from '../../../../contexts/Context';
import Input from '../../../../components/Input';

export default function RdoEquipamento({route}) {
	const {params} = route;
	const {dataEmpresa, dataFrente, dataFuncionario} = useContext(Context);
	const [horario] = useState(new Date().toGMTString('pt-BR').replace('GMT', ''));
	console.log(params);

	// Empresas
	const [useDataEmpresa] = useState(dataEmpresa.map(x => x.nomeFantasia));
	const [useEmpresa, setEmpresa] = useState(null);
	const [useSendEmpresa, setSendEmpresa] = useState(null);
	const [useErrorEmpresa, setErrorEmpresa] = useState(null);

	// Funcionarios
	const [useDataFuncionario] = useState(dataFuncionario.map(x => x.funcionarioNome));
	const [useFuncionario, setFuncionario] = useState(null);
	const [useSendFuncionario, setSendFuncionario] = useState(null);
	const [useErrorFuncionario, setErrorFuncionario] = useState(null);

	// Horarios
	const [useVisibleInicio, setVisibleInicio] = useState(false);
	const [useHorarioInicio, setHorarioInicio] = useState(new Date((Date.now())));
	const [useVisibleFinal, setVisibleFinal] = useState(false);
	const [useHorarioFinal, setHorarioFinal] = useState(new Date((Date.now() + (4 * 60 * 60 * 1000))));

	// Descrição
	const [useDescricao, setDescricao] = useState('');

	function sendData() {
		if (!useSendEmpresa) {
			setErrorEmpresa('Empresa não cadastrada');
		}

		if (!useSendFuncionario) {
			setErrorFuncionario('Funcionario não cadastrado(a)');
		}

		console.log(new Date(useHorarioInicio).getTime(), new Date(useHorarioFinal).getTime());

		if (useSendEmpresa && useSendFuncionario) {
			const send = {
				empresa: useSendEmpresa.empresaId,
				frente: params.frenteId,
				funcionario: useSendFuncionario.funcionarioId,
				dataInicio: new Date(useHorarioInicio).getTime(),
				dataFinal: new Date(useHorarioFinal).getTime(),
				descricao: useDescricao,
			};
			console.log(send);
		}
	}

	function idade(props) {
		const NascAno = new Date(props).getFullYear();
		const NascMesDia = Number(new Date(props).getMonth()) + Number(new Date(props).getDate());
		const NowAno = new Date().getFullYear();
		const NowMesDia = Number(new Date().getMonth()) + Number(new Date().getDate());
		let idade;
		if (NowMesDia > NascMesDia) {
			idade = NowAno - NascAno;
		} else {
			idade = NowAno - NascAno - 1;
		}

		return idade;
	}

	useEffect(() => {
		// Empresa
		setSendEmpresa(null);
		const [emp] = dataEmpresa.filter(x => x.nomeFantasia === useEmpresa);
		console.log(emp);
		if (emp) {
			setSendEmpresa(emp);
			setErrorEmpresa(null);
		}

		// Funcionario
		setSendFuncionario(null);
		const [func] = dataFuncionario.filter(x => x.funcionarioNome === useFuncionario);
		if (func) {
			setSendFuncionario(func);
			setErrorFuncionario(null);
		}
	}, [useFuncionario, useEmpresa]);

	return (
		<ScrollView horizontal={false} style={{flex: 1}} >
			<ScrollView horizontal={true} style={{flex: 1}} contentContainerStyle={{
				flex: 1,
			}}>
				<View style={{width: '100%'}}>
					<Text style={styles.h1}>{horario.slice(0, horario.length - 10)}</Text>
					<Text style={styles.title}>
						{ params.frenteNome}
					</Text>

					<AutoCompleteInput
						data={useDataEmpresa}
						placeholder="Empresa"
						value={useDataFuncionario}
						onChangeText={setEmpresa}
						textError={useErrorEmpresa}
					/>
					<AutoCompleteInput
						data={useDataFuncionario}
						placeholder="Escopo do serviço"
						value={useDataFuncionario}
						onChangeText={setFuncionario}
						textError={useErrorFuncionario}
					/>

					<AutoCompleteInput
						data={useDataFuncionario}
						placeholder="Nome do equipamento"
						value={useFuncionario}
						onChangeText={setFuncionario}
						textError={useErrorFuncionario}
					/>

					{useSendFuncionario && <View style={styles.containerInfoFuncionario}>
						<View style={styles.containerImg}>
							<Image
								style={styles.img}
								source={useSendFuncionario.src}
							/>
						</View>
						<View style={styles.containerInfo}>
							<Text style={styles.h4}>Matricula: {useSendFuncionario.funcionarioId}</Text>
							<Text style={styles.h4}>Nome: {useSendFuncionario.funcionarioNome}</Text>
							<Text style={styles.h4}>Apelido: &apos; {useSendFuncionario.apelido} &apos;</Text>
							<Text style={styles.h4}>Idade: { idade(useSendFuncionario.nascimento)} anos</Text>
							<Text style={styles.h4}>Função: {useSendFuncionario.funcao}</Text>
						</View>
					</View>
					}
					<View style={styles.containerTime}>
						<Text style={styles.h3}>Horario:</Text>
						<View style={styles.time}>
							<Text style={styles.h4}>Inicio</Text>
							<Button title={useHorarioInicio.toLocaleTimeString('pt-BR').slice(0, -3)}
								color={styles.timeButton.backgroundColor}
								onPress={() => {
									setVisibleInicio(true);
								}} />
							<DateTimePickerModal
								isVisible={useVisibleInicio}
								mode="time"
								locale="pt-BR"
								date={useHorarioInicio}
								onConfirm={x => {
									setVisibleInicio(false);
									setHorarioInicio(x);
								}}
								onCancel={() => {
									setVisibleInicio(false);
								}}
								is24Hour={true}

							/>
						</View>
						<View style={styles.time}>
							<Text style={styles.h4}>Termino</Text>
							<Button title={useHorarioFinal.toLocaleTimeString('pt-BR').slice(0, -3)}
								color={styles.timeButton.backgroundColor}
								onPress={() => {
									setVisibleFinal(true);
								}} />
							<DateTimePickerModal
								isVisible={useVisibleFinal}
								mode="time"
								locale="pt-BR"
								date={useHorarioFinal}
								onConfirm={x => {
									setVisibleFinal(false);
									setHorarioFinal(x);
								}}
								onCancel={() => {
									setVisibleFinal(false);
								}}
								is24Hour={true}
							/>
						</View>
					</View>
					<Input style={{height: 80}}
						placeholder="Observação"
						onChangeText={setDescricao}
					/>
					<View style={{flex: 1, alignItems: 'center', width: '100%', margin: 10}}>
						<View style={{width: '40%', margin: 10}}>
							<Button title="Salvar" color={styles.timeButton.backgroundColor} onPress={sendData}/>
						</View>
					</View>
				</View>
			</ScrollView>
		</ScrollView>
	);
}
