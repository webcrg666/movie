import { TOGGLE_STARRED, TOGGLE_BOOKMARKS } from '../action-names';

const initialState = {
  starred: [],
  bookmarks: [],
};

function toggleCategory(category: number[], id: number) {
  const isOnList = category.includes(id);

  return isOnList
    ? category.filter((item: number) => item !== id)
    : [...category, id];
}

const favoritesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_STARRED:
      return { ...state, starred: toggleCategory(state.starred, action.id) };
    case TOGGLE_BOOKMARKS:
      return {
        ...state,
        bookmarks: toggleCategory(state.bookmarks, action.id),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
