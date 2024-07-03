import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../../assets/4clutch-logo.png";
import './style.css';  // Estilos específicos podem ser adicionados aqui

export function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs="auto" className="d-flex align-items-center">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top logo-img"
              alt="Logo"
            />
            <p className="mb-0 ml-2">&copy; {new Date().getFullYear()} 4Clutch. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
