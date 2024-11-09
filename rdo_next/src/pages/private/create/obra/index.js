import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import ContainerPage from "@/components/Front/ContainerPage";
import cepPromise from "cep-promise";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Format from "@/components/Front/other/Format";
import TryRequest from "@/components/Front/other/TryRequest";
const _4devs = require("@killovsky/4devs");

const CreateObra = () => {
  const estados = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];
  const [Error, setError] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [telefone1, setTelefone1] = useState("");
  const [telefone2, setTelefone2] = useState("");
  const [cno, setCno] = useState("");
  const [situacao, setSituacao] = useState("Ativa");

  useEffect(() => {
    console.log("CEP find");
    if (cep && cep.length === 10) {
      const cepReplace = Format.toStringNumber(cep);
      cepPromise(cepReplace).then((data) => {
        console.log("data", data);
        setLogradouro(data.street);
        setBairro(data.neighborhood);
        setCidade(data.city);
        setEstado(data.state);
      });
    }
  }, [cep]);

  useEffect(() => {
    console.log("Fake Info");
    _4devs.gerar("1", false, "pessoa").then(({ dados }) => {
      console.log(dados[0]);
      const [pessoa] = dados;
      setCep(Format.CEP(pessoa.cep));
      setNome(pessoa.nome);
      setTelefone1(Format.telefone(pessoa.telefone_fixo));
      setTelefone2(Format.telefone(pessoa.celular));
      setNumero(pessoa.numero);
      setCno(Format.CNO(Math.floor(Math.random() * 10 ** 12)));
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const params = {
      nome,
      cep,
      logradouro,
      numero,
      bairro,
      cidade,
      estado,
      telefone1,
      telefone2,
      cno,
      situacao,
    };
    const send = TryRequest.add({tableName: "OBRAS", type: "insert", params, updateOnDuplicate: true});
    console.log(params);
  }
  return (
    <ContainerPage isloading={true}>
      <div className={styles.container}>
        <h2>Cadastro de Obra</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              placeholder="Usina Alagoa"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} xs={8} controlId="formGridZip">
              <Form.Label>CEP</Form.Label>
              <Form.Control
                placeholder="35367-000"
                value={cep}
                onChange={(e) => {
                  setCep(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Estado</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                value={estado}
                onChange={(e) => {
                  setEstado(e.target.value);
                }}
              >
                {estados.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} xs={8} controlId="formGridLogradouro">
              <Form.Label>Logradouro</Form.Label>
              <Form.Control
                placeholder="Rua santa clara"
                value={logradouro}
                onChange={(e) => {
                  setLogradouro(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNumero">
              <Form.Label>Numero</Form.Label>
              <Form.Control
                placeholder="1548"
                type="number"
                value={numero}
                onChange={(e) => {
                  setNumero(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                placeholder="Centro"
                value={bairro}
                onChange={(e) => {
                  setBairro(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                placeholder="Alagoa"
                value={cidade}
                onChange={(e) => {
                  setCidade(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Telefone 1</Form.Label>
              <Form.Control
                type="tel"
                placeholder="31 3827 2498"
                value={telefone1}
                onChange={(e) => {
                  setTelefone1(Format.telefone(e.target.value));
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Telefone 2</Form.Label>
              <Form.Control
                type="tel"
                placeholder="31 9 9568 1489"
                value={telefone2}
                onChange={(e) => {
                  setTelefone2(Format.telefone(e.target.value));
                }}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>CNO</Form.Label>
            <Form.Control
              placeholder="99.999.99999/99"
              value={cno}
              onChange={(e) => {
                setCno(Format.CNO(e.target.value));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Label>Estado da Obra</Form.Label>
            <div className="mb-3">
              <Form.Check
                defaultChecked
                label="Ativa"
                name="group1"
                type={"radio"}
                id={`inline-radio-1`}
                onChange={(e) => {
                  setSituacao("Ativa");
                }}
              />
              <Form.Check
                label="Inativa"
                name="group1"
                type={"radio"}
                id={`inline-radio-2`}
                onChange={(e) => {
                  setSituacao("Inativa");
                }}
              />
            </div>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </ContainerPage>
  );
};

export default CreateObra;
