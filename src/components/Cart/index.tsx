import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CartItem from '../CartItem';
import { IProduct } from '../../commons/interface';
import './style.css'

function Cart() {
    const [cart, setCart] = useState<IProduct[]>([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(storedCart);
    }, []);

    const removeFromCart = (id: number) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <Container>
            <h1 className="my-4">Carrinho de Compras</h1>
            <Row>
                <Col md={8}>
                    {cart.length > 0 ? (
                        cart.map(item => (
                            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
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
                            <p><strong>Total:</strong> R$ {getTotalPrice()}</p>
                            <Button block className='order-button'>Finalizar Compra</Button>
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default Cart;
