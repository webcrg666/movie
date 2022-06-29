import React from 'react';
import styles from './ProductCardHeader.module.css';
import { IMAGE_PATH } from '@/settings/imageSettings';
import { Description } from './description';
import { IMovie } from '@/types';

const imageSize = '300';

function ProductCardHeader({ product }: { product: IMovie }) {
  const {
    poster_path: posterPath,
    title,
    vote_average: rating,
    overview,
  } = product;
  const imageUrl = `${IMAGE_PATH}${imageSize}/${posterPath}`;

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <img className={styles.image} src={imageUrl} alt="" />
          <Description title={title} rating={rating} overview={overview} />
        </div>
      </div>
    </div>
  );
}

export { ProductCardHeader };
