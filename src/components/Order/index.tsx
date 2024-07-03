import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { IProduct } from '../../commons/interface';
import './style.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function Order() {
  const [order, setOrder] = useState<IProduct[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('PIX');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem('cart') || '[]');
    setOrder(storedOrder);

    const storedUsername = localStorage.getItem('userName') || '';
    setUsername(storedUsername);
  }, []);

  const getTotalPrice = () => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
  
  const cleanCart = () => {
    localStorage.removeItem('cart');
    setOrder([]);
    Swal.fire({
      title:"Sucesso",
      text:"Compra Finalizada!",
      icon: "success"
    });

  }
  

  return (
    <Container className='order-page'>
      <h1 className="my-4 order-title">Detalhes do Pedido</h1>
      <Row>
        <Col md={8}>
          <div className="order-products p-3">
            <h4>Resumo do Pedido</h4>
            <ul className="list-unstyled">
              {order.map(item => (
                <li key={item.id}>
                  <span className='item-name'>{item.name}</span> <br />
                  <span>Quantidade: {item.quantity}</span> <br />
                  <span>Subtotal: R$ {(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <hr />
            <p><strong>Total:</strong> R$ {getTotalPrice()}</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="order-user p-3">
            <h4>Dados do Usuário</h4>
            <p><strong>Nome de Usuário:</strong> {username}</p>

            <Form.Group controlId="paymentMethod">
              <Form.Label>Forma de Pagamento</Form.Label>
              <Form.Control 
                as="select" 
                value={paymentMethod} 
                onChange={(e) => setPaymentMethod(e.target.value)}
                className='form-select'
              >
                <option value="PIX">PIX</option>
                <option value="BOLETO">Boleto</option>
                <option value="FIADO">Fiado</option>
              </Form.Control>
            </Form.Group>

            <Button as={Link} to="/home" block className='confirm-button' onClick={cleanCart}>Confirmar</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Order;
