import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputText from "./InputText";
import InputSelect from "./InputSelect";
import { clientSchema, Client } from "../../../types/client";
import Link from "next/link";

type Props = {
  type: "new" | "edit"
  defaultValues: Client | {};
  onSubmit: any;
};

const BrazilianStates = [
  { id: "AC", value: "Acre" },
  { id: "AL", value: "Alagoas" },
  { id: "AP", value: "Amapá" },
  { id: "AM", value: "Amazonas" },
  { id: "BA", value: "Bahia" },
  { id: "CE", value: "Ceará" },
  { id: "DF", value: "Distrito Federal" },
  { id: "ES", value: "Espírito Santo" },
  { id: "GO", value: "Goiás" },
  { id: "MA", value: "Maranhão" },
  { id: "MT", value: "Mato Grosso" },
  { id: "MS", value: "Mato Grosso do Sul" },
  { id: "MG", value: "Minas Gerais" },
  { id: "PA", value: "Pará" },
  { id: "PB", value: "Paraíba" },
  { id: "PR", value: "Paraná" },
  { id: "PE", value: "Pernambuco" },
  { id: "PI", value: "Piauí" },
  { id: "RJ", value: "Rio de Janeiro" },
  { id: "RN", value: "Rio Grande do Norte" },
  { id: "RS", value: "Rio Grande do Sul" },
  { id: "RO", value: "Rondônia" },
  { id: "RR", value: "Roraima" },
  { id: "SC", value: "Santa Catarina" },
  { id: "SP", value: "São Paulo" },
  { id: "SE", value: "Sergipe" },
  { id: "TO", value: "Tocantins" },
];

const sexos = [
  { id: "Masculino", value: "Masculino" },
  { id: "Feminino", value: "Feminino" },
];
const status = [
  { id: true, value: "Ativa" },
  { id: false, value: "Inativa" },
]

export default function ClientForm({ type, defaultValues, onSubmit }: Props) {
  const form = useForm<Client>({
    resolver: zodResolver(clientSchema),
    defaultValues,
  });
  console.log('defaultValues: ', defaultValues);
  const onInvalid = (errors: any) => console.error(errors);
  return (
    <form
      className="px-2 w-[340px] max-w-[calc(100vw-60px)]"
      onSubmit={form.handleSubmit(onSubmit, onInvalid)}
    >
      <InputText label="Nome" name="nome" form={form} />
      <InputText label="Sobrenome" name="sobrenome" form={form} />
      <InputText label="CPF/CNPJ" name="cpfCnpj" form={form} />
      <InputText label="Data de nascimento" name="dataNascimento" form={form} />
      <InputText label="E-mail" name="email" form={form} />
      <InputText label="Telefone" name="telefone" form={form} />
      <InputText label="Senha" name="senha" type="password" form={form} />
      <InputSelect label="Sexo" name="sexo" options={sexos} form={form} />
      <InputText label="Logradouro" name="endereco.logradouro" form={form} />
      <InputText label="Número" name="endereco.numero" form={form} />
      <InputText label="Complemento" name="endereco.complemento" form={form} />
      <InputText label="Bairro" name="endereco.bairro" form={form} />
      <InputText label="CEP" name="endereco.cep" form={form} />
      <InputText label="Localidade" name="endereco.localidade" form={form} />
      <InputSelect
        label="Estado"
        name="endereco.uf"
        options={BrazilianStates}
        form={form}
      />
      {type === "edit" && <InputSelect
        label="status"
        name="status"
        options={status}
        form={form}
      />}
      <div className="flex  flex-nowrap gap-3 justify-between">
        <button
          type="submit"
          onClick={() => {
            console.log("click");
          }}
          className="w-full my-4 py-2 px-2 rounded-md bg-blue-700 hover:bg-blue-800 text-white font-semibold"
        >
          Salvar
        </button>      
        <Link
          href="/clients"
          className="w-full my-4 py-2 px-2 text-center bg-gray-300 text-gray-900 rounded hover:bg-gray-400"
        >
          Voltar
        </Link>

      </div>

    </form>
  );
}
