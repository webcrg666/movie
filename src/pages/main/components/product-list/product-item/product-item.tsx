import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './product-item.module.scss';
import { ProductHeader } from './product-header';
import { Button } from '@/common/components/ui/button';
import { IMovie } from '@/interfaces';
import { POSTER_URL } from '@/settings/image';

function ProductItem({ movie }: { movie: IMovie }) {
  const {
    id,
    title,
    vote_average: voteAverage,
    poster_path: posterPath,
  } = movie;
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={styles.card}>
      <img
        className={styles.poster}
        src={POSTER_URL + posterPath}
        alt="movie poster"
      />
      <div className={styles.descriptionWrapper}>
        <div className={styles.description}>
          <ProductHeader rating={voteAverage} id={id} />
          <h4 className={styles.name}> {title}</h4>
        </div>

        <Button type="card" fullwidth onClick={handleButtonClick}>
          Подробнее
        </Button>
      </div>
    </div>
  );
}

export { ProductItem };
