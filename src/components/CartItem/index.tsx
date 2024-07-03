import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { IProduct } from "../../commons/interface";
import './style.css';

interface CartItemProps {
  item: IProduct;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

function CartItem({ item, removeFromCart, increaseQuantity, decreaseQuantity }: CartItemProps) {
  return (
    <Card className="mb-3 cart-card">
      <Row noGutters>
        <Col md={4}>
          <Card.Img src={item.imageUrl} alt={item.name} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              <strong>Preço:</strong> R$ {item.price.toFixed(2)}<br />
              <strong>Quantidade:</strong> {item.quantity}
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Button className="quantity-button" size="sm" onClick={() => decreaseQuantity(item.id)}>-</Button>{' '}
                <Button className="quantity-button" size="sm" onClick={() => increaseQuantity(item.id)}>+</Button>
              </div>
              <Button className="remove-button" size="sm" onClick={() => removeFromCart(item.id)}>Remover</Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CartItem;
