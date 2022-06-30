import {
  UPDATE_PRODUCT_LIST_SOURCE,
  UPDATE_PRODUCT_LIST,
  SET_PREV_PAGE,
  SET_NEXT_PAGE,
  CHANGE_SORT_DROPDOWN,
  CHANGE_YEAR_FILTER_DROPDOWN,
  CHANGE_USER_FILTER_DROPDOWN,
  TOGGLE_FILTER_CHECKBOX,
  SET_FIRST_PAGE,
  RESET_FILTERS,
  LOGIN,
  SET_LOGIN_MODAL,
  LOGOUT,
  TOGGLE_STARRED,
  TOGGLE_BOOKMARKS,
} from './action-names';
import {
  IMovie,
  IcheckBoxClickAction,
  IchangeFilterDropdownAction,
  IchangeSortDropdownAction,
} from '@/interfaces';

export function updateProductListSource(list: IMovie[]) {
  return {
    type: UPDATE_PRODUCT_LIST_SOURCE,
    list,
  };
}
export function updateProductList(list: IMovie[]) {
  return {
    type: UPDATE_PRODUCT_LIST,
    list,
  };
}

export function setFirstPage() {
  return {
    type: SET_FIRST_PAGE,
  };
}

export function setPrevPage() {
  return {
    type: SET_PREV_PAGE,
  };
}

export function setNextPage() {
  return {
    type: SET_NEXT_PAGE,
  };
}

export function changeSortDropdown({
  dropdownType,
  sortBy,
  sortType,
  name,
}: IchangeSortDropdownAction) {
  return {
    type: CHANGE_SORT_DROPDOWN,
    dropdownType,
    sortBy,
    sortType,
    name,
  };
}
export function changeYearFilterDropdown({
  dropdownType,
  name,
}: IchangeFilterDropdownAction) {
  return {
    type: CHANGE_YEAR_FILTER_DROPDOWN,
    dropdownType,
    name,
  };
}
export function changeUserFilterDropdown({
  dropdownType,
  name,
}: IchangeFilterDropdownAction) {
  return {
    type: CHANGE_USER_FILTER_DROPDOWN,
    dropdownType,
    name,
  };
}
export function toggleFilterCheckbox({
  id,
  name,
  isChecked,
}: IcheckBoxClickAction) {
  return {
    type: TOGGLE_FILTER_CHECKBOX,
    id,
    name,
    isChecked,
  };
}

export function resetFilters() {
  return {
    type: RESET_FILTERS,
  };
}

export function login() {
  return {
    type: LOGIN,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function setLoginModal(isActive: boolean) {
  return {
    type: SET_LOGIN_MODAL,
    isActive,
  };
}

export function toggleStarred(id: number) {
  return {
    type: TOGGLE_STARRED,
    id,
  };
}

export function toggleBookmarks(id: number) {
  return {
    type: TOGGLE_BOOKMARKS,
    id,
  };
}
