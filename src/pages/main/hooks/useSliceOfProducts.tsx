import { useSelector } from 'react-redux';
import {
  getPageNumber,
  getPaginationSize,
  getProducts,
} from '@/redux/selectors';

function useSliceOfProducts() {
  const products = useSelector(getProducts);
  const pageNumber = useSelector(getPageNumber);
  const paginationSize = useSelector(getPaginationSize);

  const firstPos = paginationSize * (pageNumber - 1);
  const secondPos = firstPos + paginationSize;

  return products.slice(firstPos, secondPos);
}

export default useSliceOfProducts;
