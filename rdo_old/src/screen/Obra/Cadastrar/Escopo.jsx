import {View, Text, Button, ScrollView} from 'react-native';
import styles from '../../../../style/MainStyle';
import React, {useContext} from 'react';
import Input from '../../../components/Input';
import {Context} from '../../../contexts/Context';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as Location from 'expo-location';

export default function Escopo() {
	const {dataEmpresa, dataFuncao, dataObra} = useContext(Context);
	// Nome completo
	const [usefrenteNome, setfrenteNome] = React.useState(null);
	const [useErrorfrenteNome, setErrorfrenteNome] = React.useState(null);
	// Descricao
	const [useDescricao, setDescricao] = React.useState('');
	// Extra code removed for brevity.
	// create a Hook to store our region data.

	const [errorMsg, setErrorMsg] = React.useState(null);
	const [useRegion, setRegion] = React.useState(null);

	// Horarios
	//
	const [useVisibleInicio, setVisibleInicio] = React.useState(false);
	const [useHorarioInicio, setHorarioInicio] = React.useState(new Date((Date.now() - (1 * 24 * 60 * 60 * 1000))));
	//
	const [useVisibleFinal, setVisibleFinal] = React.useState(false);
	const [useHorarioFinal, setHorarioFinal] = React.useState(new Date((Date.now() + (1 * 24 * 60 * 60 * 1000))));

	const sendData = () => {
		// Verificar nome completo
		if (!usefrenteNome) {
			setErrorfrenteNome('Preencha o campo');
		}

		// Send Informações
		if (
			usefrenteNome
			&& useRegion
		) {
			const send = {
				frenteNome: usefrenteNome,
				latitude: useRegion.latitude,
				longitude: useRegion.longitude,
				observacao: '',
				obraId: dataObra.obraId,
			};
			console.log(send);
		}
	};

	console.log('useHorarioInicio', useHorarioInicio.toLocaleDateString('pt-br', {
		dateStyle: ('full'),
		timeStyle: ('full'),
	}));

	React.useEffect(() => {
		setTimeout(async () => {
			const {status} = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				setErrorMsg('Permission to access location was denied');
				return;
			}

			const location = await Location.getCurrentPositionAsync({});
			setRegion({
				latitude: Number(location.coords.latitude),
				longitude: Number(location.coords.longitude),
				latitudeDelta: 0.013,
				longitudeDelta: 0.013,
			});
		}, 1);
		// Nome completo
		setErrorfrenteNome(null);
	}, [usefrenteNome]);

	return (
		<ScrollView horizontal={false} style={{flex: 1}} >
			<ScrollView horizontal={true} style={{flex: 1}} contentContainerStyle={{flex: 1}}>
				<View style={{width: '100%'}}>
					<Text style={styles.title}>Cadastre</Text>
					<Input
						placeholder="ID: '01.01.01.01'"
						onChangeText={setfrenteNome}
						textError={useErrorfrenteNome}
					/>

					<Input
						placeholder="Nome do Serviço"
						onChangeText={setfrenteNome}
						textError={useErrorfrenteNome}
					/>
					<Input style={{height: 80}}
						placeholder="Observação"
						onChangeText={setDescricao}
					/>
					<View style={styles.containerTime}>
						<View style={styles.time}>
							<Text style={styles.h3}>Inicio</Text>
							<Button title={useHorarioInicio.toGMTString('pt-BR').slice(0, -13)}
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
						<View style={styles.time}>
							<Text style={styles.h3}>Fim</Text>
							<Button title={useHorarioFinal.toGMTString('pt-BR').slice(0, -13)}
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
				</View>
			</ScrollView>
		</ScrollView>
	);
}
