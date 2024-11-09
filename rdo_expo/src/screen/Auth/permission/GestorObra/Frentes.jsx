import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import ErrorCheck from '../../../../class/Erro/ErrorCheck';
import ButtonPress from '../../../../components/ButtonPress';
import InputMask from '../../../../components/InputMask';
import {Context} from '../../../../../AppContextProvider';
import InputBinary from '../../../../components/InputBinary';
import ScrollContainer from '../../../../components/ScrollContainer';
import InputNormal from '../../../../components/InputNormal';
import Mysql from '../../../../class/Mysql';
import Gerador from '../../../../class/Fake/Gerador';
import InputMulti from '../../../../components/InputMulti';
import RadioMulti from '../../../../components/RadioMulti';

export default function Frentes({navigation, route}) {
  const ctx = useContext(Context);

  const [useError, setError]= useState(false);
  const [useLoading, setLoading] = useState(false);
  const [useNome, setNome]= useState('');
  const [useLocalizacao, setLocalizacao]= useState('');
  const [useObras, setObras]= useState(false);
  const [useObservacao, setObservacao]= useState('');
  const [useSituacao, setSituacao]= useState(false);

  async function save() {
    setLoading(false);
    const [obraId] = ctx.obras.filter((x)=>x.nome === useObras).map((x)=> x.obraId);
    const params = {
      nome: useNome,
      localizacao: useLocalizacao,
      obraId,
      observacao: useObservacao,
      situacao: useSituacao,
    };
    console.log(params);
    const error = await ErrorCheck.go(params);
    if (error.length > 0) {
      setError(error);
      setLoading(true);
      console.log(error);
      return;
    }
    if (route.params.data) {
      params.frenteId = route.params.data.frenteId;
      const update = await Mysql.update('FRENTES', params, 'frenteId', route.params.data.frenteId);

      if (update.sqlMessage) {
        setLoading(true);
        return setError([update.sqlMessage]);
      }
    } else {
      const insert = await Mysql.insert('FRENTES', params);
      console.log(insert);
      if (insert.sqlMessage) {
        setLoading(true);
        return setError([insert.sqlMessage]);
      }
    }
    const data = await Mysql.read('FRENTES');
    console.log(data);
    if (data.sqlMessage) {
      return console.log(data.sqlMessage);
    }
    ctx.setFrentes(data);
    navigation.navigate({
      name: 'Ativas',
      params: {
        name: route.params.name,
        icon: route.params.icon,
      }});
  }

  useEffect(() =>{
    console.log(route.params, ctx.obras);
    if (route.params.data) {
      setNome(route.params.data.nome);
      setLocalizacao(route.params.data.localizacao);
      setObservacao(route.params.data.observacao);
      setSituacao(route.params.data.situacao);
      setObras(ctx.obras.filter((x)=>x.obraId === route.params.data.obraId).map((x)=>String(x.nome))[0]);
      setLoading(true);
    } else {
      Gerador.create('pessoa').then((data)=>{
        setNome((data.endereco.estadoSigla+'-'+data.endereco.logradouro).slice(0, 18));
        setLocalizacao(data.endereco.cep);
        setObservacao(String((Math.random()*10**12).toFixed(0)));
        setSituacao('ATIVA');
        setLoading(true);
      });
    }
  }, []);

  useEffect(() =>{
    console.log(useObras);
  }, [useObras]);

  return (
    <ScrollContainer useLoading={useLoading}>

      <InputNormal
        value={useNome}
        onChangeText={setNome}
        placeholder="Nome"
      />
      <RadioMulti
        list={ctx.obras.filter((x)=>x.situacao.toUpperCase() === 'ATIVA').map((x)=>String(x.nome))}
        placeholder="Obras"
        value={useObras}
        onValueChange={setObras}
      />
      <InputNormal
        value={useObservacao}
        onChangeText={setObservacao}
        placeholder="Descrição do local"
        height={100}
      />
      {route.params.data && useSituacao &&
         <InputBinary
           placeholder={'Situação'}
           value={useSituacao}
           onValueChange={setSituacao}
           list={['ATIVA', 'INATIVA']}/>}
      <View>
        {useError &&
       useError.map((erro, i)=>{
         return (
           <Text style={{alignSelf: 'flex-start', color: 'red', fontSize: 12}} key={i}>{erro}</Text>
         );
       })}
      </View>
      <ButtonPress
        onPress={save}
        title={route.params.data?'Atualizar':'Salvar'}
      />
    </ScrollContainer>
  );
};
