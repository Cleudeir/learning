class Obra {
  constructor(params) {
    this.obraId=params.obraId||'';
    this.logradouro=params.logradouro||'';
    this.bairro=params.bairro||'';
    this.cidade=params.cidade||'';
    this.estado=params.estado||'';
    this.cno=params.cno||'';
    this.telefoneFixo=params.telefoneFixo||'';
    this.telefoneCelular=params.telefoneCelular||'';
    this.situacao=params.situacao||'';
  }
}
export default Obra;
