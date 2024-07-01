import { ICategory } from "../commons/interface";
import { api } from "../lib/axios";

const CATEGORIES_URL = "/categories";

const handleResponse = (response: any) => {
  return response;
};

const handleError = (error: any) => {
  return error.response;
};

const findAll = async (): Promise<any> => {
  try {
    const response = await api.get(CATEGORIES_URL);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

const remove = async (id: number): Promise<any> => {
  try {
    const response = await api.delete(`${CATEGORIES_URL}/${id}`);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

const save = async (category: ICategory): Promise<any> => {
  try {
    const response = await api.post(CATEGORIES_URL, category);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

const findById = async (id: number): Promise<any> => {
  try {
    const response = await api.get(`${CATEGORIES_URL}/${id}`);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

const CategoryService = {
  findAll,
  remove,
  save,
  findById,
};

export default CategoryService;
