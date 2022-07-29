import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Filter } from './filter';
import styles from './main.module.scss';
import { ProductList } from './product-list';
import useProductFilters from '../hooks/useProductFilters';
import { productsSlice } from '@/redux/reducers/productsSlice';

function Main() {
  const dispatch = useDispatch();
  const filteredProducts = useProductFilters();
  const { updateProductList, setFirstPage } = productsSlice.actions;

  useEffect(() => {
    dispatch(updateProductList(filteredProducts));
    dispatch(setFirstPage());
  }, [dispatch, filteredProducts, setFirstPage, updateProductList]);

  return (
    <div className="container">
      <div className={styles.contentWrapper}>
        <Filter />
        <ProductList />
      </div>
    </div>
  );
}

export { Main };
