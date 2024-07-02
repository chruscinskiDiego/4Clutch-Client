import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { ICategory } from '../../commons/interface';
import './style.css';

interface IProductCardProps {
  name: string;
  imageUrl: string;
  category: ICategory;
  price: number;
}

const ProductCard = ({ name, imageUrl, category, price }: IProductCardProps) => (
  <Card style={{ width: '18rem' }} className='card-style'>
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body>
      <Card.Title className='card-title'>{name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{category.name}</Card.Subtitle>
      <Card.Text>{price.toFixed(2)}</Card.Text>
      <Button className='card-button'>Visualizar</Button>
    </Card.Body>
  </Card>
);

export default ProductCard;
