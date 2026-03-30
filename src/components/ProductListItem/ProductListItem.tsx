import { type Product } from '../../types/index';
import { Link } from 'react-router';
import css from './ProductListItem.module.css';

interface Props {
  product: Product;
}

export const ProductListItem = ({ product }: Props) => {
  return (
    <li className={css.listItem}>
      <Link to={`${product.id}`} className={css.link}>
        {product.title}
      </Link>
    </li>
  );
};
