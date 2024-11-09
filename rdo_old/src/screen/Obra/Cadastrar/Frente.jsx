import {View, Text, Button, ScrollView} from 'react-native';
import styles from '../../../../style/MainStyle';
import React, {useContext} from 'react';
import Input from '../../../components/Input';
import {Context} from '../../../contexts/Context';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';

export default function Frente() {
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
						placeholder="Nome da frente"
						onChangeText={setfrenteNome}
						textError={useErrorfrenteNome}
					/>
					<Input style={{height: 80}}
						placeholder="Descrição do local"
						onChangeText={setDescricao}
					/>
					<View style={styles.containerMap}>
						{useRegion && <MapView
							provider={PROVIDER_GOOGLE}
							style={styles.map}
							region={useRegion}
							onRegionChangeComplete={region => setRegion(region)}
						>
							<Marker coordinate={useRegion} />
						</MapView>}
						{!useRegion && <View style={styles.map}>
						</View>}
					</View>
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
