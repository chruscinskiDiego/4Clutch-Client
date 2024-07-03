import { Modal, Button } from 'react-bootstrap';
import { IProduct } from '../../commons/interface';
import './style.css'
import Swal from 'sweetalert2';

interface IProductModalProps {
  show: boolean;
  onHide: () => void;
  product: IProduct | null;
}

const cartAdded = () => {
  Swal.fire({
    title:"Sucesso",
    text:"Produto adicionado ao carrinho!",
    icon: "success"
  });
}

const cartExists = () => {
  Swal.fire({
    title:"Atenção",
    text:"Este produto já foi adicionado ao carrinho!",
    icon: "warning"
  });
}

const ProductModal = ({ show, onHide, product }: IProductModalProps) => {
  if (!product) return null;

  const addToCart = (product: IProduct) => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const productExists = cart.some((item: IProduct) => item.id === product.id);

    if (productExists) {
      cartExists();
    } else {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      cartAdded();
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered className="custom-modal">
      <Modal.Header closeButton className="custom-modal-header">
        <Modal.Title>{product.modelId.name} | {product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.imageUrl} alt={product.name} className='product-image' />
        <h5>Exterior: {product.exteriorId.name}</h5>
        <p className='price'>R$ {product.price.toFixed(2)}</p>
        <p>Descrição: {product.description}</p>
      </Modal.Body>
      <Modal.Footer className="custom-modal-footer">
        <Button onClick={onHide} className='close-button'>
          Fechar
        </Button>
        <Button onClick={() => { addToCart(product); onHide(); }} className='add-cart-button'>
          Adicionar ao Carrinho
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
