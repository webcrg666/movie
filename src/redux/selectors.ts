export const getProductsSource = (state: any) => state.products.productsSource;
export const getProducts = (state: any) => state.products.products;
export const getFilters = (state: any) => state.filter;
export const getCheckboxes = (state: any) => state.filter.checkboxes;
export const getDropdownParams = (state: any) => state.filter.dropdownParams;
export const getPageNumber = (state: any) => state.products.pageNumber;
export const getPaginationSize = (state: any) => state.products.paginationSize;
export const getPagesCount = (state: any) =>
  Math.ceil(state.products.products.length / state.products.paginationSize);
export const getUserRole = (state: any) => state.auth.userRole;
export const getLoginModalActive = (state: any) => state.modal.loginModalActive;
export const getStarredList = (state: any) => state.favorites.starred;
export const getBookmarkList = (state: any) => state.favorites.bookmarks;
