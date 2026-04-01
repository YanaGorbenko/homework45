import css from './Loader.module.css';

interface Props {
  loader: boolean;
}

export const Loader = ({ loader }: Props) => {
  return <>{loader && <p className={css.loading}>Завантаження...</p>}</>;
};
