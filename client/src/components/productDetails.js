// import React from 'react';
import ReviewStars from './reviewStars.js';
import styles from '../style/style.module';

let ProductDetails = (props) => {
  return (
    <div name={props.name ? props.name : ''} className={styles['product-details']}>
      <div className={styles['product-details-button']}>
        <div className={styles['inline-block']}>
          <div>{props.title}</div>
          {
            props.isReview ?
            <ReviewStars include={props.isReview} stars={props.product.averagerating} reviews={props.product.reviews}/>
            : null
          }
        </div>
        <div className={`${styles['carrot']} ${styles['inline-block']}`}>❯</div>
      </div>
    </div>
  );
};

export default ProductDetails;