import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const HeaderBar = ({ user }) => {
  async function logout() {
    try {
      await fetch("/api/firebase/logout");
      window.location.href = "/home";
    } catch (error) {
      console.error(error);
      throw new Error("Unable to log out");
    }
  }
  return (
    <header className={styles.header}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link href="/home" passHref>
            <Navbar.Brand>Terral</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Link href="/about" passHref>
              <Navbar.Brand className="me-auto">About</Navbar.Brand>
            </Link>
            {!user && (
              <Link href="/login" passHref>
                <Navbar.Brand>Login</Navbar.Brand>
              </Link>
            )}
            {user && (
              <Nav>
                <NavDropdown title={user.email} id="collasible-nav-dropdown">
                  <Link href="/private/home" passHref>
                    <NavDropdown.Item>Home</NavDropdown.Item>
                  </Link>
                  <Link href="/private/obras" passHref>
                    <NavDropdown.Item>Obras</NavDropdown.Item>
                  </Link>
                  <Link href="/private/orcamento" passHref>
                    <NavDropdown.Item>Orçamento</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderBar;
