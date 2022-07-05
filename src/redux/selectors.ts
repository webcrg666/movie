import { createSelector } from 'reselect';

export const getProductsSource = (state: any) => state.products.productsSource;
export const getProducts = (state: any) => state.products.products;
export const getFilters = (state: any) => state.filter;
export const getUserFilter = (state: any) => state.filter.userFilter;
export const getYearFilter = (state: any) => state.filter.yearFilter;
export const getCheckboxes = (state: any) => state.filter.checkboxes;
export const getDropdownParams = (state: any) => state.filter.dropdownParams;
export const getPageNumber = (state: any) => state.products.pageNumber;
export const getPaginationSize = (state: any) => state.products.paginationSize;
export const getPagesCount = createSelector(
  [getProducts, getPaginationSize],
  (products: any, paginationSize: any) =>
    Math.ceil(products.length / paginationSize)
);
export const getUserRole = (state: any) => state.auth.userRole;
export const getLoginModalActive = (state: any) => state.modal.loginModalActive;
export const getStarredList = (state: any) => state.favorites.starred;
export const getBookmarkList = (state: any) => state.favorites.bookmarks;
export const getFavorites = (state: any) => state.favorites;
export const getStarred = (state: any) => state.favorites;
