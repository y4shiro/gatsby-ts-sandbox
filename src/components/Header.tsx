import React from 'react';
import * as styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>タイトルロゴ</h1>
      <nav>
        <ul className={styles.headerMenu}>
          <li>
            <a href="#" className={styles.headerMenuItem}>
              メニュー
            </a>
          </li>
          <li>
            <a href="#" className={styles.headerMenuItem}>
              メニュー
            </a>
          </li>
          <li>
            <a href="#" className={styles.headerMenuItem}>
              メニュー
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
