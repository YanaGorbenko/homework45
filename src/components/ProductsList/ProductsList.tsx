import { type Product } from '../../types/index';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import css from './ProductsList.module.css';

interface Props {
  products: Product[];
}

export const ProductsList = ({ products }: Props) => {
  return (
    <ul className={css.productsList}>
      {products.map(product => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
