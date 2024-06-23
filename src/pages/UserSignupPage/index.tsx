import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './style.css';

export function UserSignupPage() {
  const [formData, setFormData] = useState({
    nomeUsuario: '',
    email: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    console.log(formData);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row>
        <Col>
          <div className="form-container">
            <h1 className="text-center">Cadastro</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formNomeUsuario">
                <Form.Label>Nome de Usuário</Form.Label>
                <Form.Control
                  type="text"
                  name="nomeUsuario"
                  value={formData.nomeUsuario}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </Form.Group>

              <Form.Group controlId="formSenha">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Cadastrar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
