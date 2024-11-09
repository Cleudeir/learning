import {View, Pressable, Text, ScrollView} from 'react-native';
import styles from '../../../../style/MainStyle';
import React, {useContext} from 'react';
import {Context} from '../../../contexts/Context';
import {DataTable} from 'react-native-paper';

export default function Visualizar({navigation}) {
	const {dataRdoFuncionario} = useContext(Context);
	console.log('rdo');

	function getTotal(total, item) {
		return total + (item.dataFinal - item.dataInicio);
	}

	function getHoras(value) {
		const normalize = value / 1000 / 60 / 60;
		return normalize;
	}

	const uniqueIdFrente = new Set();
	dataRdoFuncionario.forEach(x => {
		uniqueIdFrente.add(`${x.frenteId} = ${x.frenteNome}`);
	});
	const arrayIdFrente = [...uniqueIdFrente];

	const uniqueIdEmpresa = new Set();
	dataRdoFuncionario.forEach(x => {
		uniqueIdEmpresa.add(`${x.empresaId} = ${x.nomeFantasia}`);
	});
	const arrayIdEmpresa = [...uniqueIdEmpresa];

	return (
		<ScrollView horizontal={false} style={{flex: 1}} >
			<ScrollView horizontal={true} style={{flex: 1}} contentContainerStyle={{
				flex: 1,
			}}>
				<View style={{width: '100%'}}>
					<DataTable>
						<DataTable.Header>
							<DataTable.Title>Empresa id</DataTable.Title>
							<DataTable.Title>Funcionario</DataTable.Title>
							<DataTable.Title>Funcao</DataTable.Title>
							<DataTable.Title>Frente Id</DataTable.Title>
							<DataTable.Title>Horas</DataTable.Title>
							<DataTable.Title>Descrição</DataTable.Title>
						</DataTable.Header>

						{
							dataRdoFuncionario && dataRdoFuncionario.map((x, i) =>
								(<DataTable.Row key={i} >
									<DataTable.Cell >{x.empresaId}</DataTable.Cell>
									<DataTable.Cell>{x.funcionarioNome}</DataTable.Cell>
									<DataTable.Cell>{x.funcao}</DataTable.Cell>
									<DataTable.Cell>{x.frenteId}</DataTable.Cell>
									<DataTable.Cell>{getHoras(x.dataFinal - x.dataInicio)}</DataTable.Cell>
									<DataTable.Cell style={{flex: 1, alignItems: 'center'}}>{x.descricao}</DataTable.Cell>
								</DataTable.Row>
								),
							)
						}
						<DataTable.Row >
							<DataTable.Cell >-</DataTable.Cell>
							<DataTable.Cell>-</DataTable.Cell>
							<DataTable.Cell>-</DataTable.Cell>
							<DataTable.Cell>-</DataTable.Cell>
							<DataTable.Cell>{getHoras(dataRdoFuncionario.reduce(getTotal, 0))}</DataTable.Cell>
							<DataTable.Cell style={{flex: 1, alignItems: 'center'}}>-</DataTable.Cell>
						</DataTable.Row>
					</DataTable>
					<View>
						<Text>Legenda:</Text>
						<Text>  Frente:</Text>
						{arrayIdFrente && arrayIdFrente.map((x, i) =>
							(
								<Text key={i}>{x} </Text>
							),
						)}
						<Text> Empresa:</Text>
						{arrayIdEmpresa && arrayIdEmpresa.map((x, i) =>
							(
								<Text key={i}>{x} </Text>
							),
						)}
					</View>
				</View>
			</ScrollView>
		</ScrollView>
	);
}

