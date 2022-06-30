import { useSelector } from 'react-redux';
import {
  getBookmarkList,
  getFilters,
  getProductsSource,
  getStarredList,
  getUserRole,
} from '@/redux/selectors';
import productSort from '@/pages/main/helpers/product-sort';
import productFilter from '@/pages/main/helpers/product-filter';

function useProductFilters() {
  const userRole = useSelector(getUserRole);
  const starredList = useSelector(getStarredList);
  const bookmarkList = useSelector(getBookmarkList);
  const productsSource = useSelector(getProductsSource);
  const isAuthenicatedUser = userRole === 'user';
  const { sortBy, sortType, yearFilter, genre, userFilter } =
    useSelector(getFilters);
  const filteredProducts = productFilter(productsSource, isAuthenicatedUser, {
    yearFilter,
    userFilter,
    genre,
    starredList,
    bookmarkList,
  });
  const sortedProducts = productSort(filteredProducts, sortBy, sortType);

  return sortedProducts;
}

export default useProductFilters;
