import { useState, useEffect } from "react";
import Layout from "../../components/common/Layout";
import ClientForm from "../../components/clients/form/Form";
import { useRouter } from "next/router";
import { Client } from "@/types/client";
import parseDateISO from "@/utils/parse/parseDateISO";
import parseISODate from "@/utils/parse/parseISODate";
import useAppContext from "@/context";
const _4devs = require("@killovsky/4devs");
export default function NewClientPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Client | null>(null);
  const router = useRouter();
  const { user } = useAppContext()

  const onSubmit = async (values: any, e: any) => {
    console.log("data:", values, e);
    setIsLoading(false);
    const res = await fetch(`/api/cliente/cadastrar`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user?.token
      }
    });
    setIsLoading(true);
    console.log(await res.json());
    if (res.ok) {
      router.push("/clients");
    } else {
      const message = await JSON.stringify(res);
      alert(message);
    }
  };
  type Root = {
    nome: string;
    idade: number;
    cpf: string;
    rg: string;
    data_nasc: string;
    sexo: string;
    signo: string;
    mae: string;
    pai: string;
    email: string;
    senha: string;
    cep: string;
    endereco: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    telefone_fixo: string;
    celular: string;
    altura: string;
    peso: number;
    tipo_sanguineo: string;
    cor: string;
  };
  useEffect(() => {
    _4devs.gerar("1", false, "pessoa").then((data: any) => {
      const info: Root = data.dados[0];
      const client = {
        nome: info.nome.split(" ")[0],
        sobrenome: info.nome.split(" ").slice(1, 30).join(" "),
        cpfCnpj: info.cpf,
        dataNascimento: info.data_nasc,
        sexo: info.sexo,
        email: info.email,
        senha: info.senha,
        telefone: info.celular,
        endereco: {
          logradouro: info.endereco,
          numero: String(info.numero),
          complemento: "Apartamento 501",
          bairro: info.bairro,
          cep: info.cep,
          localidade: info.cidade,
          uf: info.estado,
        },
        status: true,
      };
      console.log(client);
      setData(client);
    });
  }, []);

  return (
    <Layout title="Novo Cliente" isLoading={isLoading}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center font-bold text-xl mb-4">
          <h1>Novo Cliente</h1>
        </div>
        {data && <ClientForm type={"new"} onSubmit={onSubmit} defaultValues={data} />}
      </div>
    </Layout>
  );
}
function gerarSql(arg0: number, arg1: string) {
  throw new Error("Function not implemented.");
}
