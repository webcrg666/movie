import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsSource } from '@/redux/selectors';
import findProduct from '@/pages/product-card/helpers/find-product';
import { ProductCardHeader } from './product-card-header';

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
