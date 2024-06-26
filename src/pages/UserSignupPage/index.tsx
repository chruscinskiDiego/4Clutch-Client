import React, { ChangeEvent, useState } from 'react';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import './style.css';
import logo from '../../assets/4clutch-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AuthService from '../../services/AuthService';
import { IUserSignup } from '../../commons/interface';

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

    const navigate = useNavigate();

    const [pendingApiCall, setPendingApiCall] = useState(false);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" })); // Limpa o erro do campo específico ao editar
    };

    

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setPendingApiCall(true);
        event.preventDefault();

        const user:IUserSignup= {
            username: formData.username,
            email: formData.email,
            password: formData.password,
        };

        const response = await AuthService.signup(user);

            if(response.status === 200 || response.status === 201){
                Swal.fire({
                    title:"Sucesso",
                    text:"Cadastro realizado!",
                    icon: "success"
                });
                //redireciona o usuario para a pagina de login em 1.5s
                setTimeout(() => navigate("/login"), 1500);
            }
            else{
                if(response.data.validationErrors){
                    setErrors(response.data.validationErrors);
                }
            }
        setPendingApiCall(false);  
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

                            <Button variant="primary" type="submit" className="w-100 mt-3 form-button" disabled={pendingApiCall}>
                                {pendingApiCall ? <Spinner animation="border" size="sm" /> : 'Cadastrar'}
                            </Button>
                        </Form>

                        <div className='text-center'>
                            <Link to= "/login">Fazer Login</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
