import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Filter } from './filter';
import styles from './main.module.css';
import { ProductList } from './product-list';
import useProductFilters from '../hooks/useProductFilters';
import { updateProductList, setFirstPage } from '@/redux/actions';

function Main() {
  const dispatch = useDispatch();
  const filteredProducts = useProductFilters();

  useEffect(() => {
    dispatch(updateProductList(filteredProducts));
    dispatch(setFirstPage());
  }, [dispatch, filteredProducts]);

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
