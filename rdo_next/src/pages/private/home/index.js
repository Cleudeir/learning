import React from "react";
import styles from "./index.module.css";
import ContainerPage from "@/components/Front/ContainerPage";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from "next/link";
const Home = () => {
  return (
    <ContainerPage isloading={true}>
      <div className={styles.container}>
        <div>home private</div>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Criar Obras</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link href={'/private/create/obra'}><Button variant="primary">Go somewhere</Button></Link>
      </Card.Body>
    </Card>
      </div>
    </ContainerPage>
  );
};

export default Home;
