import React from 'react';
import ruler from '../utils/ruler.js';


//Basic plan:
// Have everything in a flex container
// Every element is a react component. React components have a state to render or not.
// When position gets close enough, the image starts loading.

{/* <carouselItem load={false} imgSrc={} /> */}

//Abstracted in case I want to put all my svgs in a central location.
let exitSVG = (
  <svg className="svg-exit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
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
      <div className="carousel-modal">
        <div className="carousel-exit">
          <button className="exit-modal-button" onClick={this.props.closeModal}>
            <div className="exit-modal-background">
              {exitSVG}
            </div>
          </button>
        </div>
        <div className="carousel-container">
          <div className="carousel-images">
            {
              this.props.carouselImages.map( image => {
                return (
                  <div className="carousel-item" key={image._id}>
                      <span className="carousel-item-border">
                          <img className="carousel-image" src={image.imageUrl}></img>
                      </span>
                  </div>
                );
              })
            }
            
          </div>
          <div className="carousel-scrollbar">
            <div className="carousel-backbar">
              <div className="carousel-slider"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default Carousel;