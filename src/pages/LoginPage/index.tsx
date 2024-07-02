import React, { ChangeEvent, useState } from 'react';
import { Form, Button, Container, Row, Col, Spinner} from 'react-bootstrap';
import './style.css';
import logo from '../../assets/4clutch-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AuthService from '../../services/AuthService';
import { IUserLogin} from '../../commons/interface';

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

    const [pendingApiCall, setPendingApiCall] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setPendingApiCall(true);
        event.preventDefault();

        const user:IUserLogin = {
            username: formData.username,
            password: formData.password,
        };

        const response = await AuthService.login(user);

        if(response.status === 200 || response.status === 201){
            Swal.fire({
                title:"Sucesso",
                text:"Login realizado!",
                icon: "success"
            });
            setTimeout(() => navigate("/"), 1500);
        }
        else{
            Swal.fire({
                title:"Falha",
                text:"Credenciais inválidas!",
                icon: "error"
            });
        }

        setPendingApiCall(false);
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

                            <Button variant="primary" type="submit" className="w-100 mt-3 form-button" disabled={pendingApiCall}>
                                {pendingApiCall ? <Spinner animation="border" size="sm" /> : 'Entrar'}
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
