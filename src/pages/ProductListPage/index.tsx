import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { IProduct } from "../../commons/interface";
import ProductService from "../../services/ProductService";
import ProductCard from "../../components/ProductCard";
import ProductModal from "../../components/ProductModal";
import './style.css';

const ProductListPage = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [status, setStatus] = useState({ loading: false, error: "" });
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setStatus({ loading: true, error: "" });
    try {
      const response = await ProductService.findAll();
      if (response.status === 200) {
        setData(response.data);
        setStatus({ loading: false, error: "" });
      } else {
        setStatus({ loading: false, error: "Falha ao carregar a lista de produtos!" });
      }
    } catch (error) {
      setStatus({ loading: false, error: "Falha ao carregar a lista de produtos!" });
    }
  };

  const handleViewClick = (product: IProduct) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <Container style={{ paddingTop: '70px' }}>
      <div className="text-center">
        <h1 className="mb-3">Lista de Produtos</h1>
      </div>
      {status.loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row className="custom-row">
          {data.map((product) => (
            <Col key={product.id} xs={12} md={4} className="card">
              <ProductCard
                name={product.name}
                imageUrl={product.imageUrl}
                category={product.categoryId}
                price={product.price}
                onViewClick={() => handleViewClick(product)} // Pass the click handler
              />
            </Col>
          ))}
        </Row>
      )}
      {status.error && <Alert variant="danger" className="mt-3">{status.error}</Alert>}
      <ProductModal
        show={showModal}
        onHide={() => setShowModal(false)}
        product={selectedProduct}
      />
    </Container>
  );
};

export default ProductListPage;
