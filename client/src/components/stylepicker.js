import React from 'react';

let Stylepicker = (props) => {
  if (!props.product.variantProduct) {
    return null;
  } else {
    return (
      <div id="bottom-spacer">
        <button className="stylepicker-button">
          <div className="stylepicker-button-text">
            <div className="inline-block">
              <div className="variant-type">{props.product.variantCategory}</div>
              <div className="purchase-text">{props.product.variantType}</div>
            </div>
            <div className="inline-block">❯</div>
          </div>
        </button>
        <div id="stylepicker-variants">
          {
            props.product.variants.map( variant => {
              return (
                <a key={variant._id} href={variant.linkUrl} className="stylepicker-variant-item">
                  <div className="variant-image-container">
                    <img src={variant.imageUrl} className="variant-image"></img>
                  </div>
                </a>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Stylepicker;