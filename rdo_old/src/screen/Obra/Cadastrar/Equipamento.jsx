import {View, Text, Button, ScrollView} from 'react-native';
import styles from '../../../../style/MainStyle';
import React, {useContext} from 'react';
import Input from '../../../components/Input';
import InputMask from '../../../components/InputMask';
import {Context} from '../../../contexts/Context';
import AutoCompleteInput from '../../../components/AutoCompleteInput';

export default function Colaborador() {
	const {dataEmpresa, dataCategoria, dataObra} = useContext(Context);

	// Empresa
	const [useDataEmpresa] = React.useState(dataEmpresa.map(x => x.nomeFantasia));
	const [useEmpresa, setEmpresa] = React.useState(null);
	const [useSendEmpresa, setSendEmpresa] = React.useState(null);
	const [useErrorEmpresa, setErrorEmpresa] = React.useState(null);

	// Categoria
	const [useDataCategoria] = React.useState(dataCategoria);
	const [useCategoria, setCategoria] = React.useState(null);
	const [useSendCategoria, setSendCategoria] = React.useState(null);
	const [useErrorCategoria, setErrorCategoria] = React.useState(null);

	// Nome NomeEquipamento
	const [useNomeEquipamento, setNomeEquipamento] = React.useState(null);
	const [useErrorNomeEquipamento, setErrorNomeEquipamento] = React.useState(null);

	// Numeracao
	const [useNumeracao, setNumeracao] = React.useState(null);
	const [useErrorNumeracao, setErrorNumeracao] = React.useState(null);

	// Ano de fabricação
	const [useAnoFabricacao, setAnoFabricacao] = React.useState(null);
	const [useErrorAnoFabricacao, setErrorAnoFabricacao] = React.useState(null);

	// Nome NomeApelido
	const [useApelido, setApelido] = React.useState(null);
	const [useErrorApelido, setErrorApelido] = React.useState(null);

	const sendData = () => {
		if (!useEmpresa) {
			setErrorEmpresa('Preencha o campo');
		} else if (!useSendEmpresa) {
			setErrorEmpresa('Função não cadastrada');
		}

		if (!useCategoria) {
			setErrorCategoria('Preencha o campo');
		} else if (!useSendCategoria) {
			setErrorCategoria('Categoria não cadastrada');
		}

		// Verificar Equipamento
		if (!useNomeEquipamento) {
			setErrorNomeEquipamento('Preencha o campo');
		}

		if (!useNumeracao) {
			setErrorNumeracao('Preencha o campo');
		}

		if (!useAnoFabricacao) {
			setErrorAnoFabricacao('Preencha o campo');
		} else if (useAnoFabricacao.length < 4) {
			setErrorAnoFabricacao('Preencha corretamento');
		}

		// Verificar NomeResponsavel
		if (!useApelido) {
			setErrorApelido('Preencha o campo');
		}

		// Send Informações
		if (
			useApelido
			&& useNomeEquipamento
		) {
			const send = {
				empresaId: useSendEmpresa,
				categoria: useSendCategoria,
				nomeEquipamento: useNomeEquipamento,
				numeracao: useNumeracao,
				anoFabricacao: useAnoFabricacao,
				apelido: useApelido,
				obraId: dataObra.obraId,
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

		// Categoria
		setSendCategoria(null);
		const [ctg] = dataCategoria.filter(x => x === useCategoria);
		if (ctg) {
			setSendCategoria(ctg);
			setErrorCategoria(null);
		}

		// Numero Equipamento
		setErrorNomeEquipamento(null);
		// Numeracao
		setErrorNumeracao(null);
		// Fabricação
		setErrorAnoFabricacao(null);
		// Nome Apelido
		setErrorApelido(null);
	}, [useEmpresa, useNomeEquipamento, useNumeracao, useAnoFabricacao, useApelido, useCategoria]);

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
					<AutoCompleteInput
						data={useDataCategoria}
						placeholder="Categoria"
						value={useCategoria}
						onChangeText={setCategoria}
						textError={useErrorCategoria}
					/>
					<Input
						placeholder="Nome do equipamento"
						onChangeText={setNomeEquipamento}
						textError={useErrorNomeEquipamento}
					/>
					<Input
						placeholder="Numeração do equipamento"
						onChangeText={setNumeracao}
						textError={useErrorNumeracao}
						keyboardType="numeric"
					/>
					<InputMask
						placeholder="Ano de fabricação"
						type={'datetime'}
						options={{format: 'YYYY'}}
						keyboardType="numeric"
						onChangeText={setAnoFabricacao}
						textError={useErrorAnoFabricacao}
					/>
					<Input
						placeholder="Apelido"
						onChangeText={setApelido}
						textError={useErrorApelido}
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
