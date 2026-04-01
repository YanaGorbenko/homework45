import { getProducts } from '../../services/productsApi.tsx';

import { Loader } from '../../components/Loader/Loader.tsx';
import { Error } from '../../components/Error/Error.tsx';
import { ProductsList } from '../../components/ProductsList/ProductsList.tsx';
import { useQuery } from '@tanstack/react-query';

export const ProductsPage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return (
    <>
      <Loader loader={isLoading} />
      <Error error={isError} />
      {products && <ProductsList products={products} />}
    </>
  );
};
