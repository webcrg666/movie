import React from 'react';
import styles from './product-list.module.scss';
import { ProductItem } from './product-item';
import useSliceOfProducts from '@/pages/main/hooks/useSliceOfProducts';
import { IMovie } from '@/interfaces';

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
