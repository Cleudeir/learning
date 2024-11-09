import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import ErrorCheck from '../../../../class/Erro/ErrorCheck';
import cep from 'cep-promise';
import ButtonPress from '../../../../components/ButtonPress';
import InputMask from '../../../../components/InputMask';
import {Context} from '../../../../../AppContextProvider';
import InputBinary from '../../../../components/InputBinary';
import ScrollContainer from '../../../../components/ScrollContainer';
import InputNormal from '../../../../components/InputNormal';
import Mysql from '../../../../class/Mysql';
import Gerador from '../../../../class/Fake/Gerador';

export default function Obras({navigation, route}) {
  const ctx = useContext(Context);

  const [useError, setError]= useState(false);
  const [useLoading, setLoading] = useState(false);
  const [useNome, setNome]= useState('');
  const [useCEP, setCEP]= useState('');
  const [useLogradouro, setLogradouro]= useState('');
  const [useNumero, setNumero]= useState('');
  const [useBairro, setBairro]= useState('');
  const [useCidade, setCidade]= useState('');
  const [useEstado, setEstado]= useState('');
  const [useTelefoneFixo, setTelefoneFixo]= useState('');
  const [useTelefoneCelular, setTelefoneCelular]= useState('');
  const [useCNO, setCNO]= useState('');
  const [useSituacao, setSituacao]= useState(false);

  async function save() {
    setLoading(false);
    const params = {
      nome: useNome,
      cep: useCEP,
      logradouro: useLogradouro,
      numero: useNumero,
      bairro: useBairro,
      cidade: useCidade,
      estado: useEstado,
      telefoneFixo: useTelefoneFixo,
      telefoneCelular: useTelefoneCelular,
      cno: useCNO,
      situacao: useSituacao,
    };
    const error = await ErrorCheck.go(params);
    if (error.length > 0) {
      setError(error);
      setLoading(true);
      console.log(error);
      return;
    }
    if (route.params.data) {
      params.obraId = route.params.data.obraId;
      const update = await Mysql.update('OBRAS', params, 'obraId', route.params.data.obraId);
      if (update.sqlMessage) {
        setLoading(true);
        return setError([update.sqlMessage]);
      }
    } else {
      const insert = await Mysql.insert('OBRAS', params);
      if (insert.sqlMessage) {
        setLoading(true);
        return setError([insert.sqlMessage]);
      }
    }
    const data = await Mysql.read('OBRAS');
    if (data.sqlMessage) {
      return console.log(data.sqlMessage);
    }
    ctx.setObras(data);
    navigation.navigate({
      name: 'Ativas',
      params: {
        name: route.params.name,
        icon: route.params.icon,
      }});
  }

  useEffect(() =>{
    console.log(route.params);
    if (route.params.data) {
      setNome(route.params.data.nome);
      setCEP(route.params.data.cep);
      setNumero(route.params.data.numero);
      setLogradouro(route.params.data.logradouro);
      setBairro(route.params.data.bairro);
      setCidade(route.params.data.cidade);
      setEstado(route.params.data.estado);
      setTelefoneFixo(route.params.data.telefoneFixo);
      setTelefoneCelular(route.params.data.telefoneCelular);
      setCNO(route.params.data.cno);
      setSituacao(route.params.data.situacao);
      setLoading(true);
    } else {
      Gerador.create('pessoa').then((data)=>{
        setNome((data.endereco.estadoSigla+'-'+data.endereco.logradouro).slice(0, 18));
        setCEP(data.endereco.cep);
        setLogradouro(data.endereco.logradouro);
        setBairro(data.endereco.bairro);
        setCidade(data.endereco.cidade);
        setEstado(data.endereco.estadoSigla);
        setNumero(String(data.endereco.numero));
        setTelefoneFixo(String(data.telefone.slice(0, -1)));
        setTelefoneCelular(String(data.celular));
        setCNO(String((Math.random()*10**12).toFixed(0)));
        setSituacao('ATIVA');
        setLoading(true);
      });
    }
  }, []);
  useEffect(()=>{
    if (useCEP && useCEP.length===9) {
      const cepReplace = useCEP.replace('-', '');
      cep(cepReplace)
          .then((data)=>{
            setLogradouro(data.street);
            setBairro(data.neighborhood);
            setCidade(data.city);
            setEstado(data.state);
          });
    }
  }, [useCEP]);

  return (
    <ScrollContainer useLoading={useLoading} useError={useError}>
      <InputNormal
        value={useNome}
        onChangeText={setNome}
        placeholder="Nome"
      />
      <InputMask
        placeholder="CEP"
        type={'zip-code'}
        keyboardType="numeric"
        value={useCEP}
        onChangeText={setCEP}
      />
      <InputNormal
        value={useLogradouro}
        onChangeText={setLogradouro}
        placeholder="Logradouro"
      />
      <InputNormal
        value={useNumero}
        onChangeText={setNumero}
        placeholder="Numero"
      />
      <InputNormal
        value={useBairro}
        onChangeText={setBairro}
        placeholder="Bairro"
      />
      <InputNormal
        value={useCidade}
        onChangeText={setCidade}
        placeholder="Cidade"
      />
      <InputNormal
        value={useEstado}
        onChangeText={setEstado}
        placeholder="Estado"
      />
      <InputMask
        placeholder="Telefone Fixo"
        type={'custom'}
        options={{mask: '(99) 9999 9999'}}
        keyboardType="numeric"
        value={useTelefoneFixo}
        onChangeText={setTelefoneFixo}
      />
      <InputMask
        placeholder="Telefone Celular"
        type={'custom'}
        options={{mask: '(99) 99999 9999'}}
        keyboardType="numeric"
        value={useTelefoneCelular}
        onChangeText={setTelefoneCelular}
      />
      <InputMask
        placeholder="CNO"
        type={'custom'}
        options={{mask: '99.999.99999/99'}}
        keyboardType="numeric"
        value={useCNO}
        onChangeText={setCNO}
      />
      {route.params.data && useSituacao &&
         <InputBinary
           placeholder={'Situação'}
           value={useSituacao}
           onValueChange={setSituacao}
           list={['ATIVA', 'INATIVA']}/>}
      <View>
      </View>
      <ButtonPress
        onPress={save}
        title={route.params.data?'Atualizar':'Salvar'}
      />
    </ScrollContainer>
  );
};
