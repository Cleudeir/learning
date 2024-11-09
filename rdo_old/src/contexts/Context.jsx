import React, {createContext} from 'react';
import {useState} from 'react';
import api from '../services/Api';
import {DATA_BASE_URL,
	DATA_BASE_PORT,
	DATA_BASE_USER,
	DATA_BASE_PASSWD,
	DATA_BASE_NAME,
} from '@env';

import {empresa} from '../services/listas/empresa';
import {frente} from '../services/listas/frente';
import {funcionario} from '../services/listas/funcionario';
import {funcao} from '../services/listas/funcao';
import {obra} from '../services/listas/obra';
import {categoria} from '../services/listas/categoria';
import {rdoFuncionario} from '../services/listas/rdoFuncionario';

export const Context = createContext({
	signed: true,
	token: '',
	user: {},
	env: {},
	dataEmpresa: [],
	dataFrente: [],
	dataFuncionario: [],
	dataFuncao: [],
	dataRdoFuncionario: [],
});

export default function ContextProvider({children}) {
	const [user, setUser] = useState(false);
	const [useDataEmpresa, setDataEmpresa] = React.useState(null);
	const [usedataFrente, setdataFrente] = React.useState(null);
	const [usedataFuncionario, setdataFuncionario] = React.useState(null);
	const [useDataFuncao, setDataFuncao] = React.useState(null);
	const [useObra, setObra] = React.useState(null);
	const [useObraPermitida, setObraPermitida] = React.useState(null);
	const [useCategoria, setCategoria] = React.useState(null);
	const [useRdoFuncionario, setRdoFuncionario] = React.useState(null);

	function obraClique(obraId) {
		console.log('obraFilter');
		setDataEmpresa(empresa.filter(x => x.obraId === obraId));
		setdataFrente(frente.filter(x => x.obraId === obraId));
		setdataFuncionario(funcionario.filter(x => x.obraId === obraId));
		const [ob] = obra.filter(x => x.obraId === obraId);
		setObra(ob);
	}

	function rdoFuncionarioFilter(
		{empresa, frente, funcionario, dataInicio, dataFinal},
	) {
		console.log('rdoFuncionarioFilter');
		const rdofun = rdoFuncionario
			.filter(x => {
				if (empresa) {
					return x.empresaId === empresa;
				}

				return x !== null;
			})
			.filter(x => {
				if (frente) {
					return x.frenteId === frente;
				}

				return x !== null;
			})
			.filter(x => {
				if (funcionario) {
					return x.funcionarioId === funcionario;
				}

				return x !== null;
			})
			.filter(x => {
				if (dataInicio) {
					return x.dataInicio >= dataInicio;
				}

				return x !== null;
			})
			.filter(x => {
				if (dataFinal) {
					return x.dataFinal <= dataFinal;
				}

				return x !== null;
			});

		setRdoFuncionario(rdofun);
	}

	async function logar({email, passwd}) {
		console.log('verifySigned');
		const {user} = await api();
		setUser(user);
		setObraPermitida(obra);
		setDataFuncao(funcao);
		setCategoria(categoria);
	}

	async function deslogar() {
		setUser(null);
	}

	return (
		<Context.Provider value={{
			signed: Boolean(user),
			user,
			logar,
			deslogar,
			env: {
				DATA_BASE_URL,
				DATA_BASE_PORT,
				DATA_BASE_USER,
				DATA_BASE_PASSWD,
				DATA_BASE_NAME,
			},
			dataEmpresa: useDataEmpresa,
			dataFrente: usedataFrente,
			dataFuncionario: usedataFuncionario,
			dataFuncao: useDataFuncao,
			dataObra: useObra,
			dataCategoria: useCategoria,
			dataRdoFuncionario: useRdoFuncionario,
			dataObraPermitida: useObraPermitida,
			obraClique,
			rdoFuncionarioFilter,
		}}>
			{children}
		</Context.Provider>
	);
}

