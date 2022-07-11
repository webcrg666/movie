import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Route, Routes, HashRouter } from 'react-router-dom';
import App from './app';
import { Main } from './pages/main';
import { ProductCard } from './pages/product-card';
import { Search } from './pages/search';
import './style/index.scss';
import setupStore from './redux/store';

const store = setupStore();
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Main />} />
              <Route path="product/:productId" element={<ProductCard />} />
              <Route path="search" element={<Search />} />
            </Route>
          </Routes>
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
