import css from './Error.module.css';

interface Props {
  error: boolean;
}

export const Error = ({ error }: Props) => {
  return <>{error && <p className={css.error}>Завантаження...</p>}</>;
};
