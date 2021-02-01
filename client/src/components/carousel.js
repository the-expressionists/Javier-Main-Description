import React from 'react';
import styles from '../style/style.module';
import ruler from '../utils/ruler.js';


//Basic plan:
// Have everything in a flex container
// Every element is a react component. React components have a state to render or not.
// When position gets close enough, the image starts loading.

{/* <carouselItem load={false} imgSrc={} /> */}

//Abstracted in case I want to put all my svgs in a central location.
let exitSVG = (
  <svg className={styles['svg-exit']} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 13.415l4.95 4.95 1.414-1.415-4.95-4.95 4.95-4.95-1.415-1.413-4.95 4.95-4.949-4.95L5.636 7.05l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95z"></path>
  </svg>
);

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0
    }

    this.handleLeftClick =  this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
  }

  handleLeftClick() {
    
  }

  handleRightClick() {
    
  }
  
  handleSlider() {
    
  }
 
  render() {
    //Don't render the modal unless display is true.
    if (this.props.display === false) {
      return null;
    }

    return (
      <div className={styles['carousel-modal']}>
        <div className={styles['carousel-exit']}>
          <button className={styles['exit-modal-button']} onClick={this.props.closeModal}>
            <div className={styles['exit-modal-background']}>
              {exitSVG}
            </div>
          </button>
        </div>
        <div className={styles['carousel-container']}>
          <div className={styles['carousel-images']}>
            {
              this.props.carouselImages.map( image => {
                return (
                  <div className={styles['carousel-item']} key={image._id}>
                      <span className={styles['carousel-item-border']}>
                          <img className={styles['carousel-image']} src={image.imageUrl}></img>
                      </span>
                  </div>
                );
              })
            }
            
          </div>
          <div className={styles['carousel-scrollbar']}>
            <div className={styles['carousel-backbar']}>
              <div className={styles['carousel-slider']}></div>
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default Carousel;