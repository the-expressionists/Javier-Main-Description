// import React from 'react';
import styles from '../style/style.module';

let Summary = (props) => (
  <div className={styles['summary-container']}>
    <p className={styles['long-summary-text']}>{props.product.longDescription}</p>
    <span className={styles['inline-block']}>
      <span className={styles['article-label']}>Article Number</span>
      <span className={styles['article-number']}>137.82.142</span>
    </span>
  </div>
);

export default Summary;