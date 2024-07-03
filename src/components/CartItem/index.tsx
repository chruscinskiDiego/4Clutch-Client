import { Card, Button, Row, Col } from 'react-bootstrap';
import { IProduct } from "../../commons/interface";
import './style.css'

interface CartItemProps {
  item: IProduct;
  removeFromCart: (id: number) => void;
}

function CartItem({ item, removeFromCart }: CartItemProps) {
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
            </Card.Text>
            <Button className='remove-button' onClick={() => removeFromCart(item.id)}>Remover</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CartItem;
