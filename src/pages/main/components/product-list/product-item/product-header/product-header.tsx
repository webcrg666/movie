import React from 'react';
import { useSelector } from 'react-redux';
import styles from './product-header.module.css';
import { IconButton } from '@/common/components/ui/icon-button';
import star from '@/assets/svg/star.svg';
import bookmark from '@/assets/svg/bookmark.svg';
import starActive from '@/assets/svg/star-active.svg';
import bookmarkActive from '@/assets/svg/bookmark-active.svg';
import {
  getUserRole,
  getStarredList,
  getBookmarkList,
} from '@/redux/selectors';

function ProductHeader({ rating, id }: { rating: number; id: number }) {
  const userRole = useSelector(getUserRole);
  const starredList = useSelector(getStarredList);
  const bookmarkList = useSelector(getBookmarkList);
  const isGuest = userRole === 'guest';

  return (
    <div className={styles.productHeader}>
      <div className={styles.rating}>Рейтинг: {rating}</div>
      <div className={styles.iconWrapper}>
        <IconButton
          image={!isGuest && starredList.includes(id) ? starActive : star}
          height="20px"
          width="20px"
          label="добавить в избранное"
          dataId={id}
          dataName="toggleStarred"
        />
        <IconButton
          image={
            !isGuest && bookmarkList.includes(id) ? bookmarkActive : bookmark
          }
          height="20px"
          width="20px"
          label="добавить в закладки"
          dataId={id}
          dataName="toggleBookmarks"
        />
      </div>
    </div>
  );
}

export { ProductHeader };
