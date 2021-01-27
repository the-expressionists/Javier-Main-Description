import React from 'react';
import ruler from '../utils/ruler.js';


//Basic plan:
// Have everything in a flex container
// Every element is a react component. React components have a state to render or not.
// When position gets close enough, the image starts loading.

{/* <carouselItem load={false} imgSrc={} /> */}


class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      display: this.props.display
    }

    this.handleLeftClick =  this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
  }

  handleLeftClick() {
    
  }

  handleRightClick() {
    
  }

  handleExit() {
    
  }

  handleSlider() {
    
  }
 
  render() {
    //Don't render the modal unless display is true.
    if (this.state.display === false) {
      return null;
    }

    return (
      <div className="carousel-modal">
        <div className="carousel-exit">
          <button className="exit-modal-button" onClick={this.handleExit}>X</button>
        </div>
        <div className="carousel-container">
          <div className="carousel-carousel">
            <div className="carousel-images"></div>
            <div className="carousel-slider"></div>
          </div>
        </div>
      </div>
    );
  } 
}

export default Carousel;