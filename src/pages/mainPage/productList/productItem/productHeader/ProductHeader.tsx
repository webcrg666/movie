import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductHeader.module.css';
import { IconButton } from '@/components/UI/iconButton';
import star from '@/assets/star.svg';
import bookmark from '@/assets/bookmark.svg';
import starActive from '@/assets/star-active.svg';
import bookmarkActive from '@/assets/bookmark-active.svg';
import { setLoginModal, toggleBookmarks, toggleStarred } from '@/redux/actions';
import {
  getUserRole,
  getStarredList,
  getBookmarkList,
} from '@/redux/selectors';

function ProductHeader({ rating, id }: { rating: number; id: number }) {
  const dispatch = useDispatch();
  const userRole = useSelector(getUserRole);
  const starredList = useSelector(getStarredList);
  const bookmarkList = useSelector(getBookmarkList);
  const isGuest = userRole === 'guest';

  const handleGuestClick = () => {
    dispatch(setLoginModal(true));
  };

  const handleToggleStarred = () => {
    dispatch(toggleStarred(id));
  };

  const handleToggleBookmarks = () => {
    dispatch(toggleBookmarks(id));
  };

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

export { ProductHeader };
