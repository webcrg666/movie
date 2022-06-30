import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './product-list.module.scss';
import { ProductItem } from './product-item';
import useSliceOfProducts from '@/pages/main/hooks/useSliceOfProducts';
import { IMovie } from '@/interfaces';
import { getUserRole } from '@/redux/selectors';
import { setLoginModal, toggleStarred, toggleBookmarks } from '@/redux/actions';

function ProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sliceOfProducts = useSliceOfProducts();
  const userRole = useSelector(getUserRole);
  const isGuest = userRole === 'guest';

  const handleProductsClick = ({ target }: any) => {
    const { buttonName, id } = target.dataset;
    const isEmptyDataset = !buttonName || !id;
    const isDetailsButton = buttonName === 'details';
    const isToggleStarredButton = buttonName === 'toggleStarred';
    const isToggleBookmarksButton = buttonName === 'toggleBookmarks';

    if (isEmptyDataset) {
      return;
    }

    if (isDetailsButton) {
      navigate(`/product/${id}`);
      return;
    }

    if (isGuest && (isToggleStarredButton || isToggleBookmarksButton)) {
      dispatch(setLoginModal(true));
      return;
    }

    if (isToggleStarredButton) {
      dispatch(toggleStarred(Number(id)));
      return;
    }

    if (isToggleBookmarksButton) {
      dispatch(toggleBookmarks(Number(id)));
    }
  };

  return (
    <div
      className={styles.list}
      onClick={handleProductsClick}
      role="presentation"
    >
      {sliceOfProducts.map((movie: IMovie) => (
        <ProductItem movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export { ProductList };
