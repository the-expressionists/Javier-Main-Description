// import React from 'react';
import Carousel from './carousel.js';
import styles from '../style/style.module';

class ProductGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalDisplay: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    console.log('opening modal');
    this.setState({
      modalDisplay: true
    });   
  }

  closeModal() {
    this.setState({
      modalDisplay: false
    })
  }

  render() {
    return (
      <div className={styles['product-gallery']}>
        {
          this.props.product.carouselImages.map( image => {
            return (
              <div onClick={this.openModal} className={styles['product-gallery-item']} key={image._id}>
                  <span className={styles['product-gallery-border']}>
                      <img className={styles['product-gallery-image']} src={image.imageUrl}></img>
                  </span>
              </div>
            );
          })
        }
        <Carousel display={this.state.modalDisplay} carouselImages={this.props.product.carouselImages} closeModal={this.closeModal} />
      </div>
    );
  } 
}

export default ProductGallery;