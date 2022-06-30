import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, Routes, HashRouter } from 'react-router-dom';
import App from './app';
import { Main } from './pages/main';
import { ProductCard } from './pages/product-card';
import store from './redux/store';
import './style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Main />} />
            <Route path="product/:productId" element={<ProductCard />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
