import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { ICategory } from '../../commons/interface';

interface IProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  category: ICategory;
  price: number;
}

const ProductCard = ({ name, description, imageUrl, category, price }: IProductCardProps) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{category.name}</Card.Subtitle>
      <Card.Text>{description}</Card.Text>
      <Card.Text>{price.toFixed(2)}</Card.Text>
      <Button variant="primary">Visualizar</Button>
    </Card.Body>
  </Card>
);

export default ProductCard;
