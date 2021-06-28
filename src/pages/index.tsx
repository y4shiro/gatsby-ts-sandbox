import React from 'react';
import * as styles from './index.module.css';

const IndexPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>タイトルロゴ</h1>
        <nav>
          <ul>
            <li>メニュー</li>
            <li>メニュー</li>
            <li>メニュー</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>メインビジュアル</section>
        <section>
          <h1 className={styles.title}>Hello</h1>
          <p className={styles.text}>text</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2021 y4shiro</p>
      </footer>
    </>
  );
};

export default IndexPage;
