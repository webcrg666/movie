import { useSelector } from 'react-redux';
import {
  getFavorites,
  getFilters,
  getProductsSource,
  getUserRole,
} from '@/redux/selectors';
import productSort from '@/pages/main/helpers/product-sort';
import { filterChain } from '@/common/helpers/product-filter';

function useProductFilters() {
  const productsSource = useSelector(getProductsSource);
  const userRole = useSelector(getUserRole);
  const favorites = useSelector(getFavorites);
  const filters = useSelector(getFilters);

  console.log(filters);

  const filteredProducts = filterChain({
    isAuthenticatedUser: userRole === 'user',
    items: productsSource,
    filters: {
      ...filters,
      favorites,
    },
  });
  const sortedProducts = productSort(filteredProducts, filters);

  return sortedProducts;
}

export default useProductFilters;
