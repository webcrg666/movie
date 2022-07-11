import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './product-header.module.css';
import { IconButton } from '@/common/components/ui/icon-button';
import star from '@/assets/svg/star.svg';
import bookmark from '@/assets/svg/bookmark.svg';
import starActive from '@/assets/svg/star-active.svg';
import bookmarkActive from '@/assets/svg/bookmark-active.svg';
import { toggleBookmarks, toggleStarred } from '@/redux/actions';
import {
  getUserRole,
  getStarredList,
  getBookmarkList,
} from '@/redux/selectors';
import { authModalSlice } from '@/redux/reducers/authModalSlice';

function ProductHeader({ rating, id }: { rating: number; id: number }) {
  const dispatch = useDispatch();
  const userRole = useSelector(getUserRole);
  const starredList = useSelector(getStarredList);
  const bookmarkList = useSelector(getBookmarkList);
  const { setModalStatus } = authModalSlice.actions;
  const isGuest = useMemo(() => userRole === 'guest', [userRole]);

  const handleGuestClick = useCallback(() => {
    dispatch(setModalStatus(true));
  }, [dispatch, setModalStatus]);

  const handleToggleStarred = useCallback(() => {
    dispatch(toggleStarred(id));
  }, [dispatch, id]);

  const handleToggleBookmarks = useCallback(() => {
    dispatch(toggleBookmarks(id));
  }, [dispatch, id]);

  return (
    <div className={styles.productHeader}>
      <div className={styles.rating}>Рейтинг: {rating}</div>
      <div className={styles.iconWrapper}>
        <IconButton
          image={!isGuest && starredList.includes(id) ? starActive : star}
          height="20px"
          width="20px"
          label="добавить в избранное"
          onClick={isGuest ? handleGuestClick : handleToggleStarred}
        />
        <IconButton
          image={
            !isGuest && bookmarkList.includes(id) ? bookmarkActive : bookmark
          }
          height="20px"
          width="20px"
          label="добавить в закладки"
          onClick={isGuest ? handleGuestClick : handleToggleBookmarks}
        />
      </div>
    </div>
  );
}

export default React.memo(ProductHeader);
