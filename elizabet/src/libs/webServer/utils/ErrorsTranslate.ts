const listErrors: string[] = [
  "must be unique",
  "Validation error: cannot be null",
  "null value in column violates not-null constraint",
  "insert or update on table violates foreign key constraint",
  "Validation error: Duplicate entry for key 'PRIMARY'",
  "insert or update on table  violates exclusion constraint",
  "No result found for = null",
  "Invalid field name ",
  "Unknown field ",
  "cannot be null",
];
const listaErrosTraduzida: string[] = [
  "deve ser único",
  "Erro de validação: não pode ser nulo",
  "Valor nulo na coluna viola a restrição de não nulo",
  "Inserção ou atualização na tabela viola a restrição de chave estrangeira",
  "Erro de validação: entrada duplicada para a chave 'PRIMARY'",
  "Inserção ou atualização na tabela viola a restrição de exclusão",
  "Nenhum resultado encontrado para = nulo",
  "Nome do campo inválido",
  "Campo desconhecido",
  "não pode ser nulo",
];

const errorTranslations: { [key: string]: string } = {};

for (let i = 0; i < listErrors.length; i++) {
  errorTranslations[listErrors[i]] = listaErrosTraduzida[i];
}

function Translate(texto: string): string {
  try {
    for (const errorText in errorTranslations) {
      if (texto.includes(errorText)) {
        return texto.replace(errorText, errorTranslations[errorText]);
      } else {
        return texto;
      }
    }
    return texto;
  } catch (error) {
    console.log("error: ", error.message);
    return texto;
  }
}

export default function ErrorsTranslate(error: any) {
  let _error;
  if (error.errors && error.errors[0]?.message) {
    _error = error.errors[0]?.message;
  } else if (error?.parent?.sqlMessage) {
    _error = error?.parent?.sqlMessage;
  }
  return { error: Translate(_error) };
}
