import { useParams } from 'react-router';
import { getProductById } from '../../services/productsApi.tsx';
import { Loader } from '../../components/Loader/Loader.tsx';
import { Error } from '../../components/Error/Error.tsx';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails.tsx';
import { useQuery } from '@tanstack/react-query';

export const ProductDetailsPage = () => {
  const { productId } = useParams();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductById(productId!),
    enabled: !!productId,
  });

  return (
    <>
      <Loader loader={isLoading} />
      <Error error={isError} />
      {product && <ProductDetails product={product} />}
    </>
  );
};
