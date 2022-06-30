import React from 'react';
import { Menu } from './menu';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <Menu />
      </div>
    </header>
  );
}

export { Header };
