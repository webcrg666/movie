import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/common/components/ui/button';
import { filterChain } from '@/common/helpers/product-filter';
import { getProductsSource } from '@/redux/selectors';
import { ProductCard } from './product-card';
import buttonStyles from '../quiz-buttons.module.scss';
import styles from './final.module.scss';
import { IgenreFilterItem, IMovie } from '@/interfaces';

interface IFinalProps {
  genres: IgenreFilterItem[];
  rating: string;
  popularity: string;
}

function Final({ genres, rating, popularity }: IFinalProps) {
  const navigate = useNavigate();
  const productsSource = useSelector(getProductsSource);
  const [filteredProducts, setFilteredProducts] = useState<IMovie[]>([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const isLastPage = filteredProducts.length === currentProductIndex + 1;

  const handleButtonClick = useCallback(() => {
    console.log('test');

    navigate(`/product/${filteredProducts[currentProductIndex].id}`);
  }, [currentProductIndex, filteredProducts, navigate]);

  useEffect(() => {
    const filtered = filterChain({
      items: productsSource,
      filters: { genre: genres, rating, popularity },
    });

    setFilteredProducts(filtered);
  }, [genres, popularity, productsSource, rating]);

  const onNextButtonClick = () => {
    if (!isLastPage) {
      setCurrentProductIndex((prevIndex) => prevIndex + 1);
    }
  };

  console.log(genres);

  return (
    <div className={styles.finalStageWrap}>
      <ProductCard product={filteredProducts[currentProductIndex]} />
      <div className={buttonStyles.buttonWrapper}>
        <Button color="green" onClick={handleButtonClick} fullwidth>
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
    </div>
  );
}

export { Final };
