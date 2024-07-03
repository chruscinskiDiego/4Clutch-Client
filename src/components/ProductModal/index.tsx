import { Modal, Button } from 'react-bootstrap';
import { IProduct } from '../../commons/interface';

interface IProductModalProps {
  show: boolean;
  onHide: () => void;
  product: IProduct | null;
}

const ProductModal = ({ show, onHide, product }: IProductModalProps) => {
  if (!product) return null;

  const addToCart = (product: IProduct) => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <Modal show={show} onHide={onHide} centered className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.imageUrl} alt={product.name} className='product-image' />
        <h5>Categoria: {product.categoryId.name}</h5>
        <p>Preço: {product.price.toFixed(2)}</p>
        <p>Descrição: {product.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
        <Button variant="primary" onClick={() => { addToCart(product); onHide(); }}>
          Adicionar ao Carrinho
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
