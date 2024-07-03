import { Button, Card } from 'react-bootstrap';
import { ICategory, IExterior, IModel } from '../../commons/interface';
import './style.css';

interface IProductCardProps {
  name: string;
  imageUrl: string;
  category: ICategory;
  model: IModel;
  price: number;
  onViewClick: () => void; 
}

const ProductCard = ({ name, imageUrl, category, price, onViewClick }: IProductCardProps) => (
  <Card style={{ width: '18rem' }} className='card-style'>
    <Card.Subtitle className="mb-2 text-muted card-category">{category.name}</Card.Subtitle>
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body className='card-body'>
      <Card.Title className='card-title'>{name}</Card.Title>
      <Card.Text>R$ {price.toFixed(2)}</Card.Text>
      <Button className='card-button' onClick={onViewClick}>Visualizar</Button>
    </Card.Body>
  </Card>
);

export default ProductCard;
