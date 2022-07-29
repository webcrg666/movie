import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  checkboxes: CHECKBOXES,
  genre: [],
};

function setCheckbox(state: any, { payload }: any) {
  return state.checkboxes.map(
    ({ id, name, checked }: { id: number; name: string; checked: boolean }) => {
      const isModified = id === payload.id;
      return { id, name, checked: isModified ? payload.isChecked : checked };
    }
  );
}

function updateGenreFilter(state: any, { payload }: any) {
  if (payload.isChecked) {
    return [...state.genre, { id: payload.id, type: 'genre' }];
  }

  return state.genre.filter(
    (item: { id: number; type: string }) =>
      item.id !== payload.id && item.type !== payload.type
  );
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeSortDropdown(state, action: PayloadAction<any>) {
      state.sortBy = action.payload.sortBy;
      state.sortType = action.payload.sortType;
      state.dropdownParams[action.payload.dropdownType] = state.dropdownParams[
        action.payload.dropdownType
      ].map((item: { name: string }) => ({
        ...item,
        selected: item.name === action.payload.name,
      }));
    },
    changeFilterDropdown(state, action: PayloadAction<any>) {
      state[action.payload.dropdownType] = action.payload.name;
      state.dropdownParams[action.payload.dropdownType] = state.dropdownParams[
        action.payload.dropdownType
      ].map((item: { name: string }) => ({
        ...item,
        selected: item.name === action.payload.name,
      }));
    },
    toggleFilterCheckbox(state, action: PayloadAction<any>) {
      state.genre = updateGenreFilter(state, action);
      state.checkboxes = setCheckbox(state, action);
    },
    resetFilters() {
      return {
        ...initialState,
      };
    },
  },
});

export default filterSlice.reducer;
