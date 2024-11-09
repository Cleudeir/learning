import { GetServerSideProps } from 'next';
import Layout from '../../../components/common/Layout';
import { Client } from '../../../types/client';
import { useEffect, useState } from 'react';
import parseUnixToDate from '../../../utils/parse/UnixToDate';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import useAppContext from '@/context';

const ViewClient = () => {
  const [client, setClient] = useState<Client | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const { user } = useAppContext()
  const id = router.query.id
  useEffect(() => {
    console.log(id);
    async function fetchClients() {
      console.log("fetch");
      const response = await fetch(`/api/cliente/buscarporid/${id}`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user?.token
          }
        })
      console.log("response", response);
      if (response.status !== 200) {
        setMessageError(response.statusText)
      }
      const json = await response.json();
      console.log(json)
      setClient(json);
      setLoading(true)
    }
    if (id) {
      fetchClients()
    }
  }, [id]);

  console.log('client: ', client);

  const [formattedDataNascimento, setFormattedDataNascimento] =
    useState<string>('');

  return (
    client && <Layout title={`${client.nome} ${client.sobrenome}`}>
      <div className="text-center">
        <h1 className="text-xl font-bold"> {`${client.nome} ${client.sobrenome}`}</h1>
        <div className="mt-6">
          <span className="font-medium text-gray-900">CPF/CNPJ:</span>
          <span> {client.cpfCnpj}</span>
        </div>
        <div className="mt-6">
          <span className="font-medium text-gray-900">E-mail:</span>
          <span> {client.email}</span>
        </div>
        <div className="mt-6">
          <span className="font-medium text-gray-900">Sexo:</span>
          <span> {client.sexo}</span>
        </div>
        <div className="mt-6">
          <span className="font-medium text-gray-900">Data de nascimento:</span>
          <span> {client.dataNascimento}</span>
        </div>
        <div className="mt-6">
          <span className="font-medium text-gray-900">Endereço:</span>
          <span> {`${client.endereco.logradouro}, ${client.endereco.numero} - ${client.endereco.complemento}`}</span>
          <span> {`${client.endereco.bairro}, ${client.endereco.cep}, ${client.endereco.localidade} - ${client.endereco.uf}`}</span>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-4"
            type="button"
            onClick={() => router.push(`/clients/edit/${id}`)}
          >
            Editar
          </button>
          <Link
            href="/clients"
            className="bg-gray-300 text-gray-900 py-2 px-4 rounded hover:bg-gray-400"
          >
            Voltar
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ViewClient;

