import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components/UI/button';
import styles from './Navigation.module.css';
import { setPrevPage, setNextPage } from '@/redux/actions';
import { getPagesCount, getPageNumber } from '@/redux/selectors';

function Navigation() {
  const dispatch = useDispatch();
  const pagesCount = useSelector(getPagesCount);
  const pageNumber = useSelector(getPageNumber);
  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber >= pagesCount;

  const handlePrevPageClick = () => {
    if (!isFirstPage) {
      dispatch(setPrevPage());
    }
  };

  const handleNextPageClick = () => {
    if (!isLastPage) {
      dispatch(setNextPage());
    }
  };

  return (
    <>
      <div className={styles.navButtons}>
        <Button
          color="blue"
          fullwidth
          disabled={isFirstPage}
          onClick={handlePrevPageClick}
        >
          Назад
        </Button>
        <Button
          color="blue"
          fullwidth
          disabled={isLastPage}
          onClick={handleNextPageClick}
        >
          Вперед
        </Button>
      </div>
      <div className={styles.navCount}>
        {`${pagesCount > 0 ? pageNumber : 0} из ${pagesCount}`}
      </div>
    </>
  );
}

export { Navigation };
