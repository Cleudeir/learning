import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import InputNormal from '../../../../components/InputNormal';
import Mysql from '../../../../class/Mysql';
import ScrollContainer from '../../../../components/ScrollContainer';
import Gerador from '../../../../class/Fake/Gerador';
import ButtonPress from '../../../../components/ButtonPress';
import ErrorCheck from '../../../../class/Erro/ErrorCheck';
import Firebase from '../../../../class/Firebase';
import InputMulti from '../../../../components/InputMulti';
import {Context} from '../../../../../AppContextProvider';
import InputBinary from '../../../../components/InputBinary';

export default function Usuarios({navigation, route}) {
  const ctx = useContext(Context);

  const [useError, setError]= useState(false);
  const [useLoading, setLoading] = useState(false);
  const [useUid, setUid]= useState('');
  const [useNome, setNome]= useState('');
  const [useEmail, setEmail]= useState('');
  const [usePermissao, setPermissao]= useState(['Apontador']);
  const [useSenha, setSenha]= useState('');
  const [useObras, setObras]= useState(false);
  const [useSituacao, setSituacao]= useState(false);

  async function save() {
    setLoading(false);
    let uid = useUid;
    if (!route.params.data) {
      const userCreate = await Firebase.createUserEmail(useEmail, useSenha);
      uid = userCreate.uid;
      console.log(uid);
      if (!uid) {
        setError([JSON.stringify(userCreate.code)]);
        setLoading(true);
        return;
      }
    }
    const _premisao = [];
    if (usePermissao.includes('Gerente Geral')) {
      _premisao.push(0);
    } if (usePermissao.includes('Gerente de Obra')) {
      _premisao.push(1);
    } if (usePermissao.includes('Administrativo')) {
      _premisao.push(2);
    } if (usePermissao.includes('Apontador')) {
      _premisao.push(3);
    }

    const params = {
      uid,
      nome: useNome,
      foto: '',
      email: useEmail,
      permissao: JSON.stringify(_premisao),
      situacao: useSituacao,
    };

    const error = await ErrorCheck.go(params);

    if (error.length > 0) {
      console.log(error);
      await Firebase.deleteUser(userCreate);
      setError(error);
      setLoading(true);
      return;
    }

    if (!route.params.data) {
      const insert = await Mysql.insert('USUARIOS', params);
      console.log(insert);
      if (insert.sqlMessage) {
        await Firebase.deleteUser(userCreate);
        setLoading(true);
        setError([insert.sqlMessage]);
        return;
      }
      const ObrasParams = ctx.obras.filter((x)=>useObras.includes(x.nome)).map((x)=>({obraId: x.obraId, uid}));
      const insertObras = await Mysql.insert('USUARIOS_OBRAS', ObrasParams, ['uid']);
      console.log(insertObras);
      if (insertObras.sqlMessage) {
        await Firebase.deleteUser(userCreate);
        setLoading(true);
        setError([insertObras.sqlMessage]);
        return;
      }
    } else {
      const update = await Mysql.update('USUARIOS', params, 'uid', uid);
      if (update.sqlMessage) {
        setLoading(true);
        setError([update.sqlMessage]);
        return;
      }
      const destroy = await Mysql.destroy('USUARIOS_OBRAS', 'uid', uid);
      if (destroy.sqlMessage) {
        setLoading(true);
        setError([destroy.sqlMessage]);
        return;
      }
      const ObrasParams = ctx.obras.filter((x)=>useObras.includes(x.nome)).map((x)=>({obraId: x.obraId, uid: uid}));

      if (ObrasParams.length>0) {
        const insert02 = await Mysql.insert('USUARIOS_OBRAS', ObrasParams, ['uid']);
        if (insert02.sqlMessage) {
          setLoading(true);
          setError([insert02.sqlMessage]);
          return;
        }
      }
    }
    const data = await Mysql.readAllIncludes('USUARIOS', 'USUARIOS_OBRAS', ['obraId']);
    console.log(data);
    if (data.sqlMessage) {
      console.log(data.sqlMessage);
      setError([data.sqlMessage]);
      setLoading(true);
      return;
    }
    ctx.setUsuarios(data);
    navigation.navigate({
      name: 'Ativas',
      params: {
        name: route.params.name,
        icon: route.params.icon,
      },
    });
  }


  useEffect(()=>{
    console.log(route.params.data);
    if (route.params.data) {
      setUid(route.params.data.uid);
      setNome(route.params.data.nome);
      setEmail(route.params.data.email);
      setSituacao(route.params.data.situacao);

      const ids = route.params.data.USUARIOS_OBRAS.map((x)=>x.obraId);
      setObras(ctx.obras.filter((x)=>ids.includes(x.obraId)).map((x)=>String(x.nome)) );

      const permission = route.params.data.permissao;
      const result = [];
      if (permission.includes('0')) {
        result.push('Gerente Geral');
      } if (permission.includes('1')) {
        result.push('Gerente de Obra');
      } if (permission.includes('2')) {
        result.push('Administrativo');
      } if (permission.includes('3')) {
        result.push('Apontador');
      }
      setPermissao(result);
      setLoading(true);
    } else {
      Gerador.create('pessoa').then((data)=>{
        setNome(String(data.nome));
        setEmail(String(data.email));
        setSenha(String(data.senha));
        setSituacao('ATIVA');
        setLoading(true);
      });
    }
  }, []);

  return (
    <ScrollContainer useLoading={useLoading} useError={useError}>
      <InputNormal
        value={useNome}
        onChangeText={setNome}
        placeholder="Nome"
      />
      {!route.params.data &&<InputNormal
        value={useEmail}
        onChangeText={setEmail}
        placeholder="Email"
      />}
      {!route.params.data &&<InputNormal
        placeholder="Senha"
        value={useSenha}
        onChangeText={setSenha}
      />}
      <InputMulti
        list={[
          'Gerente Geral',
          'Gerente de Obra',
          'Administrativo',
          'Apontador',
        ]}
        check={['Apontador']}
        placeholder="Permissão"
        value={usePermissao}
        onValueChange={setPermissao}
      />
      <InputMulti
        list={ctx.obras.filter((x)=>x.situacao.toUpperCase() === 'ATIVA').map((x)=>String(x.nome))}
        placeholder="Obras"
        value={useObras}
        onValueChange={setObras}
      />
      {useSituacao && route.params.data &&
         <InputBinary
           placeholder={'Situação'}
           value={useSituacao}
           onValueChange={setSituacao}
           list={['ATIVA', 'INATIVA']}/>
      }
      <View>
      </View>
      <ButtonPress
        onPress={save}
        title={route.params.data?'Atualizar':'Salvar'}
      />
    </ScrollContainer>
  );
};
