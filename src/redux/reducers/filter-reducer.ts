import {
  CHANGE_SORT_DROPDOWN,
  CHANGE_YEAR_FILTER_DROPDOWN,
  CHANGE_USER_FILTER_DROPDOWN,
  TOGGLE_FILTER_CHECKBOX,
  RESET_FILTERS,
} from '../action-names';
import {
  DEFAULT_SORT_BY,
  DEFAULT_SORT_TYPE,
  DEFAULT_YEAR_FILTER_VALUE,
  DEFAULT_USER_FILTER_VALUE,
  DROPDOWN_SETTINGS,
  CHECKBOXES,
} from '@/settings/filter';

const initialState = {
  sortBy: DEFAULT_SORT_BY,
  sortType: DEFAULT_SORT_TYPE,
  yearFilter: DEFAULT_YEAR_FILTER_VALUE,
  userFilter: DEFAULT_USER_FILTER_VALUE,
  dropdownParams: DROPDOWN_SETTINGS,
  checkboxes: [...CHECKBOXES],
  genre: [],
};

function changeSortDropdown(state: any, action: any) {
  const dropdownType = state.dropdownParams[action.dropdownType];

  return {
    ...state,
    sortBy: action.sortBy,
    sortType: action.sortType,
    dropdownParams: {
      ...state.dropdownParams,
      [action.dropdownType]: [
        ...dropdownType.map((item: { name: string }) => ({
          ...item,
          selected: item.name === action.name,
        })),
      ],
    },
  };
}

function changeFilterDropdown(state: any, action: any, filtertype: string) {
  return {
    ...state,
    [filtertype]: action.name,
    dropdownParams: {
      ...state.dropdownParams,
      [filtertype]: [
        ...state.dropdownParams[filtertype].map((item: { name: string }) => ({
          ...item,
          selected: item.name === action.name,
        })),
      ],
    },
  };
}

function setCheckbox(state: any, action: any) {
  const { checkboxes } = state;

  return checkboxes.map(
    ({ id, name, checked }: { id: number; name: string; checked: boolean }) => {
      const isModified = id === action.id;
      return { id, name, checked: isModified ? action.isChecked : checked };
    }
  );
}

function updateGenreFilter(state: any, action: any) {
  let genreFilter = state.genre;

  if (action.isChecked) {
    genreFilter = [...genreFilter, { id: action.id, type: 'genre' }];
  } else {
    genreFilter = genreFilter.filter(
      (item: { id: number; type: string }) =>
        item.id !== action.id && item.type !== action.type
    );
  }

  return genreFilter;
}

function toggleFilterCheckbox(state: any, action: any) {
  return {
    ...state,
    genre: updateGenreFilter(state, action),
    checkboxes: setCheckbox(state, action),
  };
}

const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_SORT_DROPDOWN:
      return changeSortDropdown(state, action);
    case CHANGE_YEAR_FILTER_DROPDOWN:
      return changeFilterDropdown(state, action, 'yearFilter');
    case CHANGE_USER_FILTER_DROPDOWN:
      return changeFilterDropdown(state, action, 'userFilter');
    case TOGGLE_FILTER_CHECKBOX:
      return toggleFilterCheckbox(state, action);
    case RESET_FILTERS:
      return {
        ...initialState,
        checkboxes: initialState.checkboxes.map((item) => {
          const newItem = item;
          newItem.checked = false;
          return item;
        }),
      };
    default:
      return state;
  }
};

export default productsReducer;
