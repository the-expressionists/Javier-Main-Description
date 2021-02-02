// import React from 'react';
import styles from '../style/style.module';
import svgs from './svgs.js'

let star = '★';

let ReviewStars = (props) => (
  <div className={styles['review-stars']}>
    {
      Array.from({length: 5}).map( (undef, i) => {
        return (
          <div key={i} className={`${styles['review-star-item']}  ${(i < props.stars ? styles['filled-star'] : styles['empty-star'])}`}>{svgs.star}</div>
        );
      })
    }
    <div key='5' className={styles['review-star-item']}>{'(' + props.reviews + ')'}</div>
  </div>
);

export default ReviewStars;