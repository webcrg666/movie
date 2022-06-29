import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsSource } from '@/redux/selectors';
import findProduct from '@/helpers/findProduct';
import { ProductCardHeader } from './productCardHeader';

function ProductCard() {
  const { productId } = useParams();
  const products = useSelector(getProductsSource);
  const product = findProduct(products, Number(productId))!;

  return (
    <div>
      <ProductCardHeader product={product} />
    </div>
  );
}

export { ProductCard };
