import { ICategory } from "../../commons/interface";
import CategoryService from "../../services/CategoryService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function CategoryListPage() {
  const [data, setData] = useState<ICategory[]>([]);
  const [status, setStatus] = useState({ loading: false, error: "", success: "" });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setStatus({ loading: true, error: "", success: "" });
    try {
      const response = await CategoryService.findAll();
      if (response.status === 200) {
        setData(response.data);
      } else {
        setStatus({ loading: false, error: "Falha ao carregar a lista de categorias!", success: "" });
      }
    } catch (error) {
      setStatus({ loading: false, error: "Falha ao carregar a lista de categorias!", success: "" });
    }
    setStatus((prev) => ({ ...prev, loading: false }));
  };


  return (
    <>
      <main className="container">
        <div className="text-center">
          <span className="h3 mb-3 fw-normal">Lista de Categorias</span>
        </div>
        <Link to="/categories/new" className="btn btn-success">
          Nova categoria
        </Link>
        {status.loading ? (
          <div>Carregando...</div>
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {data.map((category: ICategory) => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>
                    <Link to={`/categories/${category.id}`} className="btn btn-info">
                      Editar
                    </Link>
                  </td>
                  <td>
                  </td>
                </tr>
              ))}
              <tr></tr>
            </tbody>
          </table>
        )}
        {status.error && <div className="alert alert-danger">{status.error}</div>}
        {status.success && <div className="alert alert-success">{status.success}</div>}
      </main>
    </>
  );
}
