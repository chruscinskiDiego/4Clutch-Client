import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../assets/4clutch-logo.png";
import AuthService from '../../services/AuthService';
import { FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import './style.css';

export function Navbar() {

  const onClickLogout = () => {
    AuthService.logout();
    window.location.reload();
  }

  return (
    <BootstrapNavbar bg="light" variant="light" expand="lg" fixed="top" className="w-100 navbar">
      <Container>
        <Row className="w-100 align-items-center">
          <Col xs={2} className="d-flex justify-content-start">
            <BootstrapNavbar.Brand as={Link} to="/">
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top logo-img"
                alt="Logo"
              />{' '}
            </BootstrapNavbar.Brand>
          </Col>
          <Col xs={8} className="text-center">
            <Nav className="justify-content-center mt-1">
              <Nav.Link as={Link} to="/">Armas</Nav.Link>
              <Nav.Link as={Link} to="/">Caixas</Nav.Link>
              <Nav.Link as={Link} to="/">Facas</Nav.Link>
            </Nav>
          </Col>
          <Col xs={2} className="d-flex justify-content-end"> {/* Alinhamento à direita */}
            <Nav>
              <Nav.Link as={Link} to="/carrinho" className="nav-icon">
                <FaShoppingCart />
              </Nav.Link>
              <Nav.Link href="#logout" onClick={onClickLogout} className="nav-icon">
                <FaSignOutAlt />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </BootstrapNavbar>
  );
}
