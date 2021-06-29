import React from 'react';
import * as styles from './index.module.css';
import 'normalize.css';

import { StaticImage } from 'gatsby-plugin-image';

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
        <section className={styles.mainVisualLayout}>
          <StaticImage
            className={styles.mainVisual}
            src="../images/mbp.jpg"
            alt="mainvisual"
          />
        </section>

        <section className={styles.contentLayout}>
          <h1 className={styles.contentTitle}>About</h1>
          <p>
            　あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
            　またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
          </p>
        </section>

        <section className={styles.contentLayout}>
          <h1 className={styles.contentTitle}>Works</h1>
          <p>
            　吾輩わがはいは猫である。名前はまだ無い。
            　どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族であったそうだ。この書生というのは時々我々を捕つかまえて煮にて食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌てのひらに載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2021 y4shiro</p>
      </footer>
    </>
  );
};

export default IndexPage;
