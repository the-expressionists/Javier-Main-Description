import React from 'react';
import ReviewStars from './reviewStars.js';

let ProductDetails = (props) => {
  return (
    <div className="product-details">
      <div className="product-details-button">
        <div className="inline-block">
          <div>{props.title}</div>
          {
            <ReviewStars include={props.isReview} stars={props.product.averageRating} reviews={props.product.reviews}/>
          }
        </div>
        <div className="carrot inline-block">❯</div>
      </div>
    </div>
  );
};

export default ProductDetails; 