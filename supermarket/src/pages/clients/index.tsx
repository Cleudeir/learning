import { useEffect, useState } from 'react';
import Layout from '../../components/common/Layout';
import Table from '../../components/clients/table/Table';
import { Client } from '@/types/client';
import Link from 'next/link';
import useAppContext from '@/context';

const Clients = (): JSX.Element => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string | null>(null);
  const { user } = useAppContext()
  useEffect(() => {
    async function fetchClients() {
      const response = await fetch('/api/cliente/listar',
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user?.token
          }
        })
      if (response.status !== 200) {
        setMessageError(response.statusText)
      };
      const json = await response.json();
      setClients(json);
      setLoading(true)
    }
    fetchClients()
  }, []);

  useEffect(() => {
    console.log(clients)
  }, [clients]);

  return (
    <Layout title="Clients" isLoading={isLoading} messageError={messageError}>
      <div className='w-full mx-auto'>
        <Table data={clients} />
      </div>
    </Layout>
  );
};

export default Clients;
