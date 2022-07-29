import { createSlice } from '@reduxjs/toolkit';

interface IFavorites {
  starred: number[];
  bookmarks: number[];
}

const initialState: IFavorites = {
  starred: [],
  bookmarks: [],
};

function toggleCategory(category: number[], id: number) {
  const isOnList = category.includes(id);

  return isOnList
    ? category.filter((item: number) => item !== id)
    : [...category, id];
}

export const favoritesSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleStarred(state, action) {
      state.starred = toggleCategory(state.starred, action.payload);
    },
    toggleBookmarks(state, action) {
      state.bookmarks = toggleCategory(state.bookmarks, action.payload);
    },
  },
});

export default favoritesSlice.reducer;
