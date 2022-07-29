import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@/common/components/ui/button';
import styles from './menu.module.scss';
import { getUserRole } from '@/redux/selectors';
import { authModalSlice } from '@/redux/reducers/authModalSlice';
import { useAppDispatch } from '@/common/hooks/redux';
import { authSlice } from '@/redux/reducers/authSlice';

function Menu() {
  const dispatch = useAppDispatch();
  const userRole = useSelector(getUserRole);
  const { setModalStatus } = authModalSlice.actions;
  const { logout } = authSlice.actions;

  const handleLoginButtonClick = () => {
    dispatch(setModalStatus(true));
  };

  const handleLogoutButtonClick = () => {
    dispatch(logout());
  };

  return (
    <nav className={styles.menu}>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="search">
        <Button>search</Button>
      </Link>
      {userRole === 'guest' && (
        <Button color="green" onClick={handleLoginButtonClick}>
          Войти
        </Button>
      )}
      {userRole === 'user' && (
        <Button color="green" onClick={handleLogoutButtonClick}>
          Выйти
        </Button>
      )}
    </nav>
  );
}

export { Menu };
