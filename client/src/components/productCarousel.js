import React from 'react';

class ProductCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div id="product-carousel">
        {
          this.props.product.carouselImages.map( image => {
            return (
              <div className="product-carousel-item" key={image._id}>
                  <span className="product-carousel-border">
                      <img className="product-carousel-image" src={image.imageUrl}></img>
                  </span>
              </div>
            );
          })
        }
      </div>
    );
  } 
}

export default ProductCarousel;