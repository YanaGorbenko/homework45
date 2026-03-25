import { NavLink } from 'react-router';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <ul className={css.productsList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? css.activeLink : css.link
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? css.activeLink : css.link
            }
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
