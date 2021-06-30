import React from 'react';
import * as styles from './index.module.css';
import 'normalize.css';

import Header from '../components/Header';
import MainVisual from '../components/MainVisual';
import About from '../components/About';
import Works from '../components/Works';

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <MainVisual />
        <About />
        <Works />
      </main>
      <footer className={styles.footerLayout}>
        <p className={styles.footerText}>&copy; 2021 y4shiro</p>
      </footer>
    </>
  );
};

export default IndexPage;
