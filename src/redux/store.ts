import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import filterReducer from './reducers/filterSlice';
// import authReducer from './reducers/authSlice';
import favoritesReducer from './reducers/favoritesSlice';
import productsReducer from './reducers/productsSlice';
import authModalReducer from './reducers/authModalSlice';
import authReducer from './reducers/authSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  filter: filterReducer,
  auth: authReducer,
  favorites: favoritesReducer,
  authModal: authModalReducer,
});

const persistConfig = {
  key: 'movies',
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
