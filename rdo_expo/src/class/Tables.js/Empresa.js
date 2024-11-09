import {typeEmpresa} from '../types/empresa';

export class Empresa {
  constructor(params) {
    this.empresaId = params.empresaId;
    this.cnpj = params.cnpj;
    this.razaoSocial = params.razaoSocial;
    this.obraId = params.obraId;

    this.nomeResponsavel = params.nomeResponsavel || '';
    this.nomeFantasia = params.nomeFantasia || '';
    this.email = params.email || '';
    this.telefoneFixo = params.telefoneFixo || '';
    this.telefoneCelular = params.telefoneCelular || '';
  }
}
