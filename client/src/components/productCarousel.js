import React from 'react';
import Gallery from './gallery.js';

class ProductCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalSwitch: true
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalSwitch: true
    });   
  }

  closeModal() {
    this.setState({
      modalSwitch: false
    })
  }

  render() {
    return (
      <div id="product-carousel">
        {
          this.props.product.carouselImages.map( image => {
            return (
              <div onClick={this.openModal} onExit={this.closeModal} className="product-carousel-item" key={image._id}>
                  <span className="product-carousel-border">
                      <img className="product-carousel-image" src={image.imageUrl}></img>
                  </span>
              </div>
            );
          })
        }
        <Gallery display={this.state.modalSwitch} />
      </div>
    );
  } 
}

export default ProductCarousel;