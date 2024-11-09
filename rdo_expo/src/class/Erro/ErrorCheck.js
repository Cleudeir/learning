class ErrorCheck {
  async go(params) {
    console.log('ErrorCheck: ', params);
    const error = [];

    if (params.telefoneFixo || params.telefoneFixo === '') {
      console.log('telefoneFixo', params.telefoneFixo.length);
      if (params.telefoneFixo.length !== 14) {
        error.push('Campo telefone fixo preenchido incorretamente!');
      }
    }

    if (params.telefoneCelular || params.telefoneCelular === '') {
      console.log('telefoneCelular', params.telefoneCelular.length);
      if (params.telefoneCelular.length !== 15) {
        error.push('Campo telefone Celular preenchido incorretamente!');
      }
    }

    if (params.cep || params.cep === '') {
      console.log('cep', params.cep.length);
      if (params.cep.length !== 9) {
        error.push('Campo CEP preenchido incorretamente!');
      }
    }

    if (params.cno || params.cno === '') {
      let number = 15;
      if ((params.cno.split('.')).length === 1) {
        number = 12;
      }
      console.log('cno', params.cno.length);
      if (params.cno.length !== number) {
        error.push('Campo CNO preenchido incorretamente!');
      }
    }

    if (params.logradouro || params.logradouro === '' ) {
      console.log('logradouro', params.logradouro.length);
      if (params.logradouro.length === 0) {
        error.push('Campo logradouro preenchido incorretamente!');
      }
    }

    if (params.bairro || params.bairro === '' ) {
      console.log('bairro', params.bairro.length);
      if (params.bairro .length === 0) {
        error.push('Campo bairro preenchido incorretamente!');
      }
    }

    if (params.cidade || params.cidade === '' ) {
      console.log('cidade', params.cidade.length);
      if (params.cidade .length === 0) {
        error.push('Campo cidade preenchido incorretamente!');
      }
    }

    if (params.estado || params.estado === '' ) {
      console.log('cno', params.estado.length);
      if (params.estado .length === 0) {
        error.push('Campo estado preenchido incorretamente!');
      }
    }

    if (params.estado || params.estado === '' ) {
      console.log('estado', params.estado.length);
      if (params.estado .length === 0) {
        error.push('Campo estado preenchido incorretamente!');
      }
    }

    if (params.nome || params.nome === '' ) {
      console.log('nome', params.nome.length);
      if (params.nome .length === 0) {
        error.push('Campo nome preenchido incorretamente!');
      }
    }
    if (params.situacao || params.situacao === '' ) {
      console.log('situacao', params.situacao.length);
      if (params.situacao.toUpperCase() !== 'INATIVA' && params.situacao.toUpperCase() !== 'ATIVA') {
        error.push('Campo situacao preenchido incorretamente!');
      }
    }


    return error;
  }
}
export default new ErrorCheck();
