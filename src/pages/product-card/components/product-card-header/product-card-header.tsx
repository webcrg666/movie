import React from 'react';
import styles from './product-card-header.module.scss';
import { POSTER_URL, BACKDROP_URL } from '@/settings/image';
import { Description } from './description';
import { IMovie } from '@/interfaces';

function ProductCardHeader({ product }: { product: IMovie }) {
  const {
    poster_path: posterPath,
    backdrop_path: backdropPath,
    title,
    vote_average: rating,
    overview,
  } = product;

  return (
    <div
      className={styles.header}
      style={{ backgroundImage: `url(${BACKDROP_URL + backdropPath})` }}
    >
      <div className={styles.overlay}>
        <div className="container">
          <div className={styles.headerInner}>
            <img
              className={styles.image}
              src={POSTER_URL + posterPath}
              alt=""
            />
            <Description title={title} rating={rating} overview={overview} />
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProductCardHeader };
