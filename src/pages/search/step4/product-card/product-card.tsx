import React from 'react';
import { POSTER_URL } from '@/settings/image';

function ProductCard({ product }) {
  if (!product) {
    return 'Ничего нет!';
  }

  const image = POSTER_URL + product.poster_path;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={image} alt="" />
    </div>
  );
}

export { ProductCard };
