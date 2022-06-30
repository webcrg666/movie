import React from 'react';
import styles from './description.module.css';

interface IDescriptionProps {
  title: string;
  rating: number;
  overview: string;
}

function Description({ title, rating, overview }: IDescriptionProps) {
  return (
    <div className={styles.description}>
      <h2 className={styles.title}>{title}</h2>
      <p>Рейтинг: {rating}</p>
      <p>{overview}</p>
    </div>
  );
}

export { Description };
