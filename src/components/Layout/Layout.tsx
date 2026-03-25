import { Outlet } from 'react-router';
import { Navigation } from '../Navigation/Navigation';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
      <main className={css.main}>{<Outlet />}</main>
    </>
  );
};
