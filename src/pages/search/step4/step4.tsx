import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@/common/components/ui/button';
import { filterChain } from '@/common/helpers/product-filter';
import { getProductsSource } from '@/redux/selectors';
import { ProductCard } from './product-card';
import styles from '../quiz-buttons.module.scss';

function Step4({ genres, review, popularity }) {
  const productsSource = useSelector(getProductsSource);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const isLastPage = filteredProducts.length === currentProductIndex + 1;

  useEffect(() => {
    const filtered = filterChain({
      items: productsSource,
      filters: { genre: genres, review, popularity },
    });

    setFilteredProducts(filtered);
  }, []);

  const onNextButtonClick = () => {
    if (!isLastPage) {
      setCurrentProductIndex((prevIndex) => prevIndex + 1);
    }
  };

  console.log(filteredProducts);

  return (
    <>
      <div>
        <ProductCard product={filteredProducts[currentProductIndex]} />
      </div>
      <div className={styles.buttonWrapper}>
        <Button color="green" fullwidth>
          Подходит
        </Button>
        <Button
          color="black"
          fullwidth
          onClick={onNextButtonClick}
          disabled={isLastPage}
        >
          Следующий
        </Button>
      </div>
    </>
  );
}

export { Step4 };
