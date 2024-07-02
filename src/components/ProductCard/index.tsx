import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { ICategory } from '../../commons/interface';
import './style.css';

interface IProductCardProps {
  name: string;
  imageUrl: string;
  category: ICategory;
  price: number;
  onViewClick: () => void; // Add the new prop
}

const ProductCard = ({ name, imageUrl, category, price, onViewClick }: IProductCardProps) => (
  <Card style={{ width: '18rem' }} className='card-style'>
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body>
      <Card.Title className='card-title'>{name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{category.name}</Card.Subtitle>
      <Card.Text>{price.toFixed(2)}</Card.Text>
      <Button className='card-button' onClick={onViewClick}>Visualizar</Button> {/* Use the prop */}
    </Card.Body>
  </Card>
);

export default ProductCard;
