import React from 'react';

class Purchase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div id="product-purchase">
          <div id="product-purchase-price">FRIHETEN
              Corner sofa-bed with storage, Skiftebo dark gray
              $799.00
              ★★☆☆☆ (222)</div>
          <div id="product-purchase-stylepicker">
              <button id="stylepicker-modaler-button">Cover Skiftebo dark grey</button>
              <div id="stylepicker-variants">
                {
                  this.props.product.variants.map( variant => {
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
          <div id="product-pushase-buyer"></div>
          <div id="product-purchase-availability">
              <div id="availability-delivery"></div>
              <div id="availability-stock"></div>
              <div id="availability-assembly"></div>
          </div>
      </div>
    );
  }
}

export default Purchase;