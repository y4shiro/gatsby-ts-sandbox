import React from 'react';
import * as styles from './MainVisual.module.css';

import { StaticImage } from 'gatsby-plugin-image';

const MainVisual = () => {
  return (
    <section className={styles.mainVisualLayout}>
      <StaticImage
        className={styles.mainVisual}
        src="../images/mbp.jpg"
        alt="mainvisual"
      />
    </section>
  );
};

export default MainVisual;
