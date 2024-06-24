import React, { ChangeEvent, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './style.css';
import axios from 'axios';
import logo from '../../assets/4clutch-logo.png';

export function UserSignupPage() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
    });

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" })); // Limpa o erro do campo específico ao editar
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const user = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
        };

        try {
            const response = await axios.post('http://localhost:8025/users', user);
            console.log("Usuário cadastrado com sucesso! - " + response.data.message);
            // Resetar o formulário e erros após sucesso
            setFormData({ username: "", email: "", password: "" });
            setErrors({ username: "", email: "", password: "" });
        } catch (error) {
            if (error.response && error.response.data && error.response.data.validationErrors) {
                const validationErrors = error.response.data.validationErrors;
                setErrors((prev) => ({
                    ...prev,
                    ...validationErrors
                }));
            } else {
                console.log("Falha ao cadastrar usuário - " + error.message);
            }
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row>
                <Col>
                    <div className="form-container mx-auto" style={{ maxWidth: '500px' }}>
                        <div className="d-flex justify-content-center align-items-center mb-3">
                        <h1 className="" style={{ margin: 0 }}>Cadastro</h1>
                        <img src={logo} alt="Logo" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                        </div>
                        <Form onSubmit={onSubmit}>
                            <Form.Group controlId="formNomeUsuario">
                                <Form.Label>Nome de Usuário</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="username"
                                    name="username"
                                    className={"form-input" + (errors.username ? " is-invalid" : "")}
                                    onChange={onChange}
                                    value={formData.username}
                                    required
                                />
                                {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={"form-input" + (errors.email ? " is-invalid" : "")}
                                    onChange={onChange}
                                    value={formData.email}
                                    required
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </Form.Group>

                            <Form.Group controlId="formSenha">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="password"
                                    name="password"
                                    className={"form-input" + (errors.password ? " is-invalid" : "")}
                                    onChange={onChange}
                                    value={formData.password}
                                    required
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 mt-3 form-button">
                                Cadastrar
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
