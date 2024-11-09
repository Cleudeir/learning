import {TextInput, View, Text, Image, Button, ScrollView} from 'react-native';
import styles from '../../../../style/MainStyle';
import React, {useState, useEffect, useContext} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AutoCompleteInput from '../../../components/AutoCompleteInput';
import {Context} from '../../../contexts/Context';
import Input from '../../../components/Input';

export default function Relatorio({navigation}) {
	const {dataEmpresa, dataFrente, dataFuncionario, rdoFuncionarioFilter} = useContext(Context);
	const [horario] = useState(new Date().toGMTString('pt-BR').replace('GMT', ''));

	// Empresas
	const [useDataEmpresa] = useState(dataEmpresa.map(x => x.nomeFantasia));
	const [useEmpresa, setEmpresa] = useState(null);
	const [useSendEmpresa, setSendEmpresa] = useState(null);
	const [useErrorEmpresa, setErrorEmpresa] = useState(null);

	// Frente de Trabalho
	const [useDataFrente] = useState(dataFrente.map(x => x.nome));
	const [useFrente, setFrente] = useState(null);
	const [useSendFrente, setSendFrente] = useState(null);
	const [useErrorFrente, setErrorFrente] = useState(null);

	// Funcionarios
	const [useDataFuncionario] = useState(dataFuncionario.map(x => x.nome));
	const [useFuncionario, setFuncionario] = useState(null);
	const [useSendFuncionario, setSendFuncionario] = useState(null);
	const [useErrorFuncionario, setErrorFuncionario] = useState(null);

	// Horarios
	//
	const [useVisibleInicio, setVisibleInicio] = useState(false);
	const [useHorarioInicio, setHorarioInicio] = useState(new Date((Date.now() - (1 * 24 * 60 * 60 * 1000))));
	//
	const [useVisibleFinal, setVisibleFinal] = useState(false);
	const [useHorarioFinal, setHorarioFinal] = useState(new Date((Date.now() + (29 * 24 * 60 * 60 * 1000))));

	// Descrição
	const [useDescricao, setDescricao] = useState('');

	async function sendData() {
		await rdoFuncionarioFilter(
			{
				empresa: useSendEmpresa ? useSendEmpresa.empresaId : null,
				frente: useSendFrente ? useSendFrente.frenteId : null,
				funcionario: useSendFuncionario ? useSendFuncionario.funcionarioId : null,
				dataInicio: new Date(useHorarioInicio).getTime(),
				dataFinal: new Date(useHorarioFinal).getTime(),
			},
		);
		navigation.navigate({
			name: 'Visualizar',
		});
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

		// Frente
		setSendFrente(null);
		const [fre] = dataFrente.filter(x => x.nome === useFrente);
		if (fre) {
			setSendFrente(fre);
			setErrorFrente(null);
		}

		// Funcionario
		setSendFuncionario(null);
		const [func] = dataFuncionario.filter(x => x.nome === useFuncionario);
		if (func) {
			setSendFuncionario(func);
			setErrorFuncionario(null);
		}
	}, [useFuncionario, useEmpresa, useFrente]);

	return (
		<ScrollView horizontal={false} style={{flex: 1}} >
			<ScrollView horizontal={true} style={{flex: 1}} contentContainerStyle={{
				flex: 1,
			}}>
				<View style={{width: '100%'}}>
					<Text style={styles.h2}>Filtros</Text>
					<AutoCompleteInput
						data={useDataEmpresa}
						placeholder="Filtar por escopo"
						value={useEmpresa}
						onChangeText={setEmpresa}
					/>
					<AutoCompleteInput
						data={useDataEmpresa}
						placeholder="Filtar por empresa"
						value={useEmpresa}
						onChangeText={setEmpresa}
					/>
					<AutoCompleteInput
						data={useDataFrente}
						placeholder="Filtar por frente de trabalho"
						value={useFrente}
						onChangeText={setFrente}
					/>
					<AutoCompleteInput
						data={useDataFuncionario}
						placeholder="Filtar por nome do funcionário"
						value={useFuncionario}
						onChangeText={setFuncionario}
					/>
					<View style={styles.containerTime}>
						<View style={styles.time}>
							<Text style={styles.h3}>Inicio</Text>
							<Button title={useHorarioInicio.toLocaleDateString('pt-BR')}
								color={styles.timeButton.backgroundColor}
								onPress={() => {
									setVisibleInicio(true);
								}} />
							<DateTimePickerModal
								isVisible={useVisibleInicio}
								mode="date"
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
						<Text style={styles.h3}>-</Text>
						<View style={styles.time}>
							<Text style={styles.h3}>Fim</Text>
							<Button title={useHorarioFinal.toLocaleDateString('pt-BR')}
								color={styles.timeButton.backgroundColor}
								onPress={() => {
									setVisibleFinal(true);
								}} />
							<DateTimePickerModal
								isVisible={useVisibleFinal}
								mode="date"
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
					<View style={{flex: 1, alignItems: 'center', width: '100%', margin: 10}}>
						<View style={{width: '40%', margin: 10}}>
							<Button title="Visualizar" color={styles.timeButton.backgroundColor} onPress={sendData}/>
						</View>
					</View>
				</View>
			</ScrollView>
		</ScrollView>
	);
}
