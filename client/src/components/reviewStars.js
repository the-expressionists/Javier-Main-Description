import React from 'react';

let ReviewStars = (props) => {
  if (props.include === true) {
    return (
      <div className="review-stars">
        {
          Array.from({length: 5}).map( (undef, i) => {
            return (
              <div key={i} className={'review-star-item ' + (i < props.stars ? 'filled-star' : 'empty-star')}>★</div>
            );
          })
        }
        <div key='5' className='review-star-item'>{'(' + props.reviews + ')'}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default ReviewStars;