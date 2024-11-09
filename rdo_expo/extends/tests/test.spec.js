import {Empresa} from '../src/Class/Empresa';
test('obj empresa', () => {
  const params = {
    empresaId: 0,
    cnpj: '',
    razaoSocial: '',
    obraId: 0,
  };
  const empresa = new Empresa(params);
  expect(empresa).toEqual(params);
},
);
