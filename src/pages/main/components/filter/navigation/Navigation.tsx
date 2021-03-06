import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/common/components/ui/button';
import styles from './navigation.module.scss';
import { getPagesCount, getPageNumber } from '@/redux/selectors';
import { productsSlice } from '@/redux/reducers/productsSlice';

const Navigation = React.memo(() => {
  const dispatch = useDispatch();
  const pagesCount = useSelector(getPagesCount);
  const pageNumber = useSelector(getPageNumber);
  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber >= pagesCount;
  const currentPage = pagesCount > 0 ? pageNumber : 0;
  const { setPrevPage, setNextPage } = productsSlice.actions;

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
        {currentPage} из {pagesCount}
      </div>
    </>
  );
});

export { Navigation };
