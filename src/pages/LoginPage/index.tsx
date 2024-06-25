import React, { ChangeEvent, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './style.css';
import axios from 'axios';
import logo from '../../assets/4clutch-logo.png';
import { Link, useNavigate } from 'react-router-dom';

export function LoginPage() {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const navigate = useNavigate();

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const user = {
            username: formData.username,
            password: formData.password,
        };

        try {
            const response = await axios.post('http://localhost:8025/login', user);
            console.log("Login efetuado com sucesso - " + response.data.message);
            navigate("/");
            
            setFormData({ username: "", password: "" });
        } catch (error) {
            if (error.response) {
                console.log("Falha ao autenticar usuario: ", error.response.data.message);
            } else {
                console.log("Erro ao fazer login: ", error.message);
            }
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row>
                <Col>
                    <div className="form-container mx-auto" style={{ maxWidth: '500px' }}>
                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <h1 className="" style={{ margin: 0 }}>Login</h1>
                            <img src={logo} alt="Logo" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                        </div>
                        <Form onSubmit={onSubmit}>
                            <Form.Group controlId="formNomeUsuario">
                                <Form.Label>Nome de Usuário</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="username"
                                    name="username"
                                    className={"form-input"}
                                    onChange={onChange}
                                    value={formData.username}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formSenha">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="password"
                                    name="password"
                                    className={"form-input"}
                                    onChange={onChange}
                                    value={formData.password}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 mt-3 form-button">
                                Entrar
                            </Button>
                        </Form>

                        <div className='text-center'>
                            <Link to= "/signup">Cadastrar-se</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
