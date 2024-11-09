import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Obra from '../screen/Obra';
import Cadastrar from '../screen/Obra/Cadastrar/index';
import Empresa from '../screen/Obra/Cadastrar/Empresa';
import Colaborador from '../screen/Obra/Cadastrar/Colaborador';
import Equipamento from '../screen/Obra/Cadastrar/Equipamento';
import Frente from '../screen/Obra/Cadastrar/Frente';
import Relatorio from '../screen/Obra/Relatorio';
import RdoFuncionario from '../screen/Obra/Lancamento/Frente/RdoFuncionario';
import RdoEquipamento from '../screen/Obra/Lancamento/Frente/RdoEquipamento';
import Principal from '../screen/Principal';
import Adicionar from '../screen/Obra/gerenciar/Adicionar';
import Remover from '../screen/Obra/gerenciar/Remover';
import React from 'react';
import Visualizar from '../screen/Obra/Relatorio/Visualizar';
import Escopo from '../screen/Obra/Cadastrar/Escopo';
import Lancamento from '../screen/Obra/Lancamento';
import Rdo from '../screen/Obra/Lancamento/Frente';

const Stack = createNativeStackNavigator();
const screenOptions = {
	HeaderStyle: {
		backgroundColor: '#ff1',
	},
};

export default function Auth() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Principal" component={Principal} options={screenOptions} />

			<Stack.Screen name="Obra" component={Obra} options={screenOptions} />

			<Stack.Screen name="Adicionar" component={Adicionar} options={screenOptions} />
			<Stack.Screen name="Remover" component={Remover} options={screenOptions} />

			<Stack.Screen name="Cadastrar" component={Cadastrar} />

			<Stack.Screen name="Empresa" component={Empresa} />
			<Stack.Screen name="Colaborador" component={Colaborador} />
			<Stack.Screen name="Equipamento" component={Equipamento} />
			<Stack.Screen name="Frente" component={Frente} />
			<Stack.Screen name="Escopo" component={Escopo} />

			<Stack.Screen name="Relatorio" component={Relatorio} />
			<Stack.Screen name="Visualizar" component={Visualizar} options={{orientation: 'all'}} />

			<Stack.Screen name="Lancamento" component={Lancamento} />

			<Stack.Screen name="Rdo" component={Rdo} />
			<Stack.Screen name="Rdo Funcionario" component={RdoFuncionario} />
			<Stack.Screen name="Rdo Equipamento" component={RdoEquipamento} />
		</Stack.Navigator>
	);
}

