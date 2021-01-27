import React from 'react';
import Carousel from './carousel.js';

class ProductGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalDisaply: false
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
      <div id="product-gallery">
        {
          this.props.product.carouselImages.map( image => {
            return (
              <div onClick={this.openModal} className="product-gallery-item" key={image._id}>
                  <span className="product-gallery-border">
                      <img className="product-gallery-image" src={image.imageUrl}></img>
                  </span>
              </div>
            );
          })
        }
        <Carousel display={this.state.modalDisplay} closeModal={this.closeModal} />
      </div>
    );
  } 
}

export default ProductGallery;