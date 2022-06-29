import { combineReducers } from 'redux';
import productsReducer from './Reducers/productsReducer';
import filterReducer from './Reducers/filterReducer';
import authReducer from './Reducers/authReducer';
import favoritesReducer from './Reducers/favoritesReducer';
import modalReducer from './Reducers/modalReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  filter: filterReducer,
  auth: authReducer,
  favorites: favoritesReducer,
  modal: modalReducer,
});

export default rootReducer;
