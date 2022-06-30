import { useSelector } from 'react-redux';
import {
  getFavorites,
  getFilters,
  getProductsSource,
  getUserRole,
} from '@/redux/selectors';
import productSort from '@/pages/main/helpers/product-sort';
import productFilter from '@/pages/main/helpers/product-filter';

function useProductFilters() {
  const productsSource = useSelector(getProductsSource);
  const userRole = useSelector(getUserRole);
  const favorites = useSelector(getFavorites);
  const filters = useSelector(getFilters);

  const filteredProducts = productFilter(productsSource, userRole, {
    ...filters,
    favorites,
  });
  const sortedProducts = productSort(filteredProducts, filters);

  return sortedProducts;
}

export default useProductFilters;
