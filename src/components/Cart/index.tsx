import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CartItem from '../CartItem';
import { IProduct } from '../../commons/interface';
import './style.css';
import { Link } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart.map((item: IProduct) => ({ ...item, quantity: 1 }))); // Inicializa a quantidade como 1
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Container>
      <h1 className="my-4">Carrinho de Compras</h1>
      <Row>
        <Col md={8}>
          {cart.length > 0 ? (
            cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            ))
          ) : (
            <div className="d-flex justify-content-center align-items-center mt-5">
              <p className="text-center">Seu carrinho está vazio, bora comprar uma skinzinha?</p>
            </div>
          )}
        </Col>
        {cart.length > 0 && (
          <Col md={4} className='order-card'>
            <div className="p-3">
              <h4>Resumo do Pedido</h4>
              <ul className="list-unstyled">
                {cart.map(item => (
                  <li key={item.id}>
                    <span className='item-name'>{item.name}</span> <br />
                    <span>Quantidade: {item.quantity}</span> <br />
                    <span>Subtotal: R$ {(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <hr />
              <p><strong>Total:</strong> R$ {getTotalPrice()}</p>
              <Button as={Link} to="/pedido" block className='order-button'>Finalizar Pedido</Button>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Cart;
