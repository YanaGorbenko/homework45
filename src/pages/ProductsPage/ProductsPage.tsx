import { getProducts } from '../../services/productsApi.tsx';
import { type Product } from '../../types/index';
import { Status } from '../../components/Status/Status.tsx';
import { ProductsList } from '../../components/ProductsList/ProductsList.tsx';
import { useQuery } from '@tanstack/react-query';

interface ProductsResponse {
  products: Product[];
}

export const ProductsPage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    select: (data: ProductsResponse) => data.products,
  });

  return (
    <>
      <Status loader={isLoading} error={isError} />
      {products && <ProductsList products={products} />}
    </>
  );
};
