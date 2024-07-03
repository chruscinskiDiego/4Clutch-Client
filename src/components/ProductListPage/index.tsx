import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Alert, Button } from "react-bootstrap";
import { IProduct } from "../../commons/interface";
import ProductService from "../../services/ProductService";
import ProductCard from "../ProductCard";
import ProductModal from "../ProductModal";
import './style.css';

interface ProductListPageProps {
  categoryId: string;
}

const ProductListPage: React.FC<ProductListPageProps> = ({ categoryId }) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [status, setStatus] = useState({ loading: false, error: "" });
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    loadData(categoryId); // Passa o categoryId para a função loadData
  }, [categoryId]); // Dependência categoryId para reexecutar o useEffect quando categoryId mudar

  const loadData = async (categoryId: string) => {
    setStatus({ loading: true, error: "" });
    try {
      const response = await ProductService.findAll(categoryId);
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

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  console.log(currentPage);

  return (
    <Container style={{ paddingTop: '70px' }}>
      <div className="text-center">
        <h1 className="mb-3 mt-4">Lista de Produtos</h1>
      </div>
      {status.loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <Row className="custom-row">
            {paginatedData.map((product) => (
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
          <div className="d-flex justify-content-center mt-4">
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="mx-2 page-button"
            >
              Anterior
            </Button>
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage * itemsPerPage >= data.length}
              className="mx-2 page-button"
            >
              Próximo
            </Button>
          </div>
            <div className="d-flex justify-content-center mt-4">
              <span>Página {currentPage}</span>
            </div>
        </>
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
