import { useParams } from 'react-router';
import { getProductById } from '../../services/ProductsApi';
import type { Product } from '../../types/index';
import { useEffect, useState } from 'react';
import css from './ProductDetailsPage.module.css';

export const ProductDetailsPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    const showProducts = async () => {
      if (!productId) {
        setIsError(true);
        return;
      }
      try {
        setIsError(false);
        setIsLoading(true);
        const product = await getProductById(productId);
        setProduct(product);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    showProducts();
  }, [productId]);

  return (
    <>
      {isLoading && <p className={css.loading}>Завантаження...</p>}
      {isError && <p className={css.error}>Ой! Сталася помилка</p>}
      {product && (
        <>
          <h2 className={css.productTitle}>{product.title}</h2>
          <p className={css.text}>{product.description}</p>
          <p className={css.text}>
            <span className={css.span}>Category:</span> {product.category}
          </p>
          <p className={css.text}>
            <span className={css.span}>Price:</span> {product.price}
          </p>
          <p className={css.text}>
            <span className={css.span}>Brand:</span> {product.brand}
          </p>
        </>
      )}
    </>
  );
};
