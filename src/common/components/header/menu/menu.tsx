import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@/common/components/ui/button';
import styles from './menu.module.scss';
import { getUserRole } from '@/redux/selectors';
import { setLoginModal, logout } from '@/redux/actions';

function Menu() {
  const dispatch = useDispatch();
  const userRole = useSelector(getUserRole);

  const handleLoginButtonClick = () => {
    dispatch(setLoginModal(true));
  };

  const handleLogoutButtonClick = () => {
    dispatch(logout());
  };

  return (
    <nav className={styles.menu}>
      <Link to="/">
        <Button>Home</Button>
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
