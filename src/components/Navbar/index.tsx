import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/4clutch-logo.png";
import AuthService from '../../services/AuthService';
import { FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import './style.css';

export function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleNavLinkClick = (path) => {
    setActiveLink(path);
  };

  const onClickLogout = () => {
    AuthService.logout();
    window.location.reload();
  };

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
            <Nav className="custom-nav justify-content-center mt-1">
              <Nav.Link
                as={Link}
                to="/produtos/pistolas"
                className={`custom-nav-link ${activeLink === '/produtos/pistolas' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('/produtos/pistolas')}
              >
                Pistolas
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/produtos/submetralhadoras"
                className={`custom-nav-link ${activeLink === '/produtos/submetralhadoras' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('/produtos/submetralhadoras')}
              >
                Submetralhadoras
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/produtos/espingardas"
                className={`custom-nav-link ${activeLink === '/produtos/espingardas' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('/produtos/espingardas')}
              >
                Espingardas
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/produtos/metralhadoras"
                className={`custom-nav-link ${activeLink === '/produtos/metralhadoras' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('/produtos/metralhadoras')}
              >
                Metralhadoras
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/produtos/rifles"
                className={`custom-nav-link ${activeLink === '/produtos/rifles' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('/produtos/rifles')}
              >
                Rifles
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/produtos/snipers"
                className={`custom-nav-link ${activeLink === '/produtos/snipers' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('/produtos/snipers')}
              >
                Snipers
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/produtos/facas"
                className={`custom-nav-link ${activeLink === '/produtos/facas' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('/produtos/facas')}
              >
                Facas
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={2} className="d-flex justify-content-end">
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
