import { type Product } from '../../types/index';
import css from './ProductDetails.module.css';

interface Props {
  product: Product;
}

export const ProductDetails = ({ product }: Props) => {
  return (
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
  );
};
