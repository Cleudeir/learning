/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import ContainerPage from "@/components/Front/ContainerPage";
import Link from "next/link";
import useAppContext from "@/components/Context";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginPage = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const [isLoading, setLoading] = useState(true)
  const { user, setUser } = useAppContext();

  const handleSubmit = async (event) => {
    setLoading(false)
    event.preventDefault();
    try {
      const get = await fetch("/api/firebase/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const { user } = await get.json();
      if (user) {
        setUser(user);
        window.location.href = "/private/home";        
      }else{
        setLoading(true)
      }
    } catch (error) {
      console.error(error);
      throw new Error("Error login");
      setLoading(true)
    }
  };

  return (
    <ContainerPage isloading={isLoading}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => {
              setEmail(e);
            }}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => {
              setPassword(e);
            }}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </ContainerPage>
  );
};

export default LoginPage;
