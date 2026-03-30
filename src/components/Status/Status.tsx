import css from './Status.module.css';

interface Props {
  loader: boolean;
  error: boolean;
}

export const Status = ({ loader, error }: Props) => {
  return (
    <>
      {loader && <p className={css.loading}>Завантаження...</p>}
      {error && <p className={css.error}>Ой! Сталася помилка</p>}
    </>
  );
};
