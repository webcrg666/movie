import { useSelector } from 'react-redux';
import {
  getBookmarkList,
  getFilters,
  getProductsSource,
  getStarredList,
  getUserRole,
} from '@/redux/selectors';
import productSort from '@/helpers/productSort';
import productFilter from '@/helpers/productFilter';

function useProductFilters() {
  const userRole = useSelector(getUserRole);
  const starredList = useSelector(getStarredList);
  const bookmarkList = useSelector(getBookmarkList);
  const isAuthenicatedUser = userRole === 'user';
  const productsSource = useSelector(getProductsSource);
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
