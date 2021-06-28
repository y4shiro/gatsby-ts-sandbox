import React from 'react';
import * as styles from './index.module.css';
import 'normalize.css';

const IndexPage = () => {
  return (
    <>
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
      <main>
        <section>メインビジュアル</section>
        <section>
          <h1>Hello</h1>
          <p>text</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2021 y4shiro</p>
      </footer>
    </>
  );
};

export default IndexPage;
