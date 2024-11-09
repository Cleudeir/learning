import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../../components/common/Layout";
import ClientForm from "@/components/clients/form/Form";
import useAppContext from "@/context";

const ClientEdit: NextPage = () => {
  const [client, setClient] = useState(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const {user} = useAppContext()
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
        setErrorMessage(response.statusText)
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

  const onSubmit = async (data: any) => {
    console.log("data", data);
    setLoading(true);
    try {
      const res = await fetch(`/api/cliente/atualizar/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + user?.token
        },
        body: JSON.stringify(data)
      }
      )
      console.log('res: ', res);
      if (!res.ok) {
        setErrorMessage(res.statusText + ", tente novamente!")
        setTimeout(() => setErrorMessage(""), 5000)
        return
      }
      router.push(`/clients`);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  };

  return (
    client && <Layout
      title="Editar Cliente"
      isLoading={isLoading}
      messageError={errorMessage}
    >
      <h1 className="text-2xl font-bold">Editar Cliente</h1>
      <ClientForm type={"edit"} defaultValues={client} onSubmit={onSubmit} />
    </Layout>
  );
};

export default ClientEdit;
