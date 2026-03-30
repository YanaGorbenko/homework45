import axios from 'axios';
import type { Product } from '../types/index';

const api = axios.create({
  baseURL: 'https://dummyjson.com/products',
});

export const getProducts = async () => {
  const { data } = await api.get<{ products: Product[] }>('/', {
    params: { limit: 20 },
  });

  return data;
};

export const getProductById = async (id: string) => {
  const { data } = await api.get<Product>(`/${id}`);
  return data;
};
