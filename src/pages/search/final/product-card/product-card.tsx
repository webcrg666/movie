import React from 'react';
import { POSTER_URL } from '@/settings/image';
import { IMovie } from '@/interfaces';
import styles from './product-card.module.scss';

function ProductCard({ product }: { product: IMovie }) {
  if (!product) {
    return <p>Ничего нет!</p>;
  }

  const image = POSTER_URL + product.poster_path;

  return (
    <div className={styles.cardWrap}>
      <h2>{product.title}</h2>
      <img src={image} alt="movie poster" className={styles.image} />
    </div>
  );
}

export { ProductCard };
