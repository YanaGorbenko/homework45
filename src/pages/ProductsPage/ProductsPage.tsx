import { useEffect, useState } from 'react';
import { getProducts } from '../../services/ProductsApi';
import { type Product } from '../../types/index';
import { Link } from 'react-router';
import css from './ProductPage.module.css';

export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const showProducts = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { products } = await getProducts();
        setProducts(products);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    showProducts();
  }, []);

  return (
    <>
      {isLoading && <p>Завантаження...</p>}
      {isError && <p>Ой! Сталася помилка</p>}
      {products && (
        <ul className={css.productsList}>
          {products.map(product => (
            <li key={product.id} className={css.listItem}>
              <Link to={`${product.id}`} className={css.link}>
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
