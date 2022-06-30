import { combineReducers } from 'redux';
import productsReducer from './reducers/products-reducer';
import filterReducer from './reducers/filter-reducer';
import authReducer from './reducers/auth-reducer';
import favoritesReducer from './reducers/favorites-reducer';
import modalReducer from './reducers/modal-reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  filter: filterReducer,
  auth: authReducer,
  favorites: favoritesReducer,
  modal: modalReducer,
});

export default rootReducer;
