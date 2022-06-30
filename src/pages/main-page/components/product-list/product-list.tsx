import React from 'react';
import styles from './product-list.module.css';
import { ProductItem } from './product-item';
import useSliceOfProducts from '@/hooks/useSliceOfProducts';
import { IMovie } from '@/types';

function ProductList() {
  const sliceOfProducts = useSliceOfProducts();

  return (
    <div className={styles.list}>
      {sliceOfProducts.map((movie: IMovie) => (
        <ProductItem movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export { ProductList };
