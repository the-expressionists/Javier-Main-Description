import React from 'react';

let Summary = (props) => (
  <div id="summary-container">
    <p className="long-summary-text">{props.product.longDescription}</p>
    <span className="inline-block">
      <span className="article-label">Article Number</span>
      <span className="article-number">137.82.142</span>
    </span>
  </div>
);

export default Summary;