import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Row, Col } from 'react-bootstrap';
import logo from "../../assets/4clutch-logo.png"

export function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" fixed="top" className="w-100">
      <Container>
        <Row className="w-100">
          <Col xs={2}>
            <BootstrapNavbar.Brand href="#home">
              <img
                src={logo} // substitua com o caminho para a sua logo
                width="45"
                height="45"
                className="d-inline-block align-top"
                alt="Logo"
              />{' '}
            </BootstrapNavbar.Brand>
          </Col>
          <Col xs={8} className="text-center">
            <Nav className="justify-content-center">
              <Nav.Link href="#armas">Armas</Nav.Link>
              <Nav.Link href="#caixas">Caixas</Nav.Link>
              <Nav.Link href="#facas">Facas</Nav.Link>
            </Nav>
          </Col>
          <Col xs={2} className="text-right">
            <Nav>
                <Nav.Link href="#carrinho">Carrinho</Nav.Link>
              <Nav.Link href="#logout">Logout</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </BootstrapNavbar>
  );
}
