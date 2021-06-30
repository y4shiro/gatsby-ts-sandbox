import React from 'react';
import * as styles from './index.module.css';
import 'normalize.css';

import { StaticImage } from 'gatsby-plugin-image';

import Header from '../components/Header';
import MainVisual from '../components/MainVisual';
import About from '../components/About';

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <MainVisual />
        <About />

        <section className={styles.contentLayout}>
          <h1 className={styles.contentTitle}>Works</h1>
          <p>
            　吾輩わがはいは猫である。名前はまだ無い。
            　どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族であったそうだ。この書生というのは時々我々を捕つかまえて煮にて食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌てのひらに載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。
          </p>
        </section>
      </main>
      <footer className={styles.footerLayout}>
        <p className={styles.footerText}>&copy; 2021 y4shiro</p>
      </footer>
    </>
  );
};

export default IndexPage;
