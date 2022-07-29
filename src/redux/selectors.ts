import { createSelector } from 'reselect';
import { RootState } from './store';

export const getProductsSource = (state: RootState) =>
  state.products.productsSource;
export const getProducts = (state: RootState) => state.products.products;
export const getFilters = (state: RootState) => state.filter;
export const getUserFilter = (state: RootState) => state.filter.userFilter;
export const getYearFilter = (state: RootState) => state.filter.yearFilter;
export const getCheckboxes = (state: RootState) => state.filter.checkboxes;
export const getDropdownParams = (state: RootState) =>
  state.filter.dropdownParams;
export const getPageNumber = (state: RootState) => state.products.pageNumber;
export const getPaginationSize = (state: RootState) =>
  state.products.paginationSize;
export const getUserRole = (state: RootState) => state.auth.userRole;
export const getStarredList = (state: RootState) => state.favorites.starred;
export const getBookmarkList = (state: RootState) => state.favorites.bookmarks;
export const getFavorites = (state: RootState) => state.favorites;
export const getStarred = (state: RootState) => state.favorites;
export const getPagesCount = createSelector(
  [getProducts, getPaginationSize],
  (products: any, paginationSize: any) =>
    Math.ceil(products.length / paginationSize)
);
export const selectLoginModalStatus = (state: RootState) =>
  state.authModal.status;
