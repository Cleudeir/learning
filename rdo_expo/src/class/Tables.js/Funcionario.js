export class Funcionario {
  constructor(params) {
    this.funcionarioId = params.funcionarioId;
    this.nome = params.nome;
    this.situacao = params.situacao;
    this.funcaoId = params.funcaoId;
    this.cpf = params.cpf;
    this.nascimento = params.nascimento;
    this.obraId = params.obraId;
    this.empresaId = params.empresaId;

    this.telefoneFixo = params.telefoneFixo || '';
    this.telefoneCelular = params.telefoneCelular || '';
    this.email = params.email || '';
    this.apelido = params.apelido || '';
    this.foto = params.foto || '';
  }

  error(empresas) {
    const validarFuncionario = {};
    const [filter] = empresas.filter((x) => x.empresaId === this.empresaId);
    if (!filter) {
      validarFuncionario.empresaId = 'Valor incorreto';
    }
    return validarFuncionario;
  }
}
