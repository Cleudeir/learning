export class RdoFuncionario {
  constructor(params) {
    this.empresaId = params.empresaId;
    this.frenteId = params.frenteId;
    this.funcionarioId = params.funcionarioId;
    this.obraId = params.obraId;
    this.dataInicio = params.dataInicio;
    this.dataFinal = params.dataFinal;
    this.descricao = params.descricao || '';
  }
}
