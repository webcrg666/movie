import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, Routes, HashRouter } from 'react-router-dom';
import App from './App';
import { MainPage } from './pages/main-page';
import { ProductCard } from './pages/productCard';
import store from './redux/store';
import './style/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<MainPage />} />
            <Route path="product/:productId" element={<ProductCard />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
