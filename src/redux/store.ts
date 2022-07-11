import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import productsReducer from './reducers/products-reducer';
import filterReducer from './reducers/filter-reducer';
import authReducer from './reducers/auth-reducer';
import favoritesReducer from './reducers/favorites-reducer';
import authModalReducer from './reducers/authModalSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  filter: filterReducer,
  auth: authReducer,
  favorites: favoritesReducer,
  authModal: authModalReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'favorites'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: [],
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default setupStore;
