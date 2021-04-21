import React, { useState, useCallback, useEffect, useRef } from "react";
import styles from '../style/style.module';
import svgs from './svgs';


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
      index: 0
    }

    this.handleLeftClick =  this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
  }

  handleLeftClick() {
    if (this.state.index > 0) {
      let newIndex = this.state.index - 1;
      let newPosition = 0 - newIndex * window.innerHeight;
      this.setState({
        index: newIndex,
        position: newPosition
      })
    }
  }

  handleRightClick() {
    if (this.state.index < this.props.carouselImages.length - 1) {
      let newIndex = this.state.index + 1;
      let newPosition = 0 - newIndex * window.innerHeight;

      this.setState({
        index: newIndex,
        position: newPosition
      })
    }
  }

  handleScroll(event) {

  }

  handleSlider() {

  }

  render() {
    //Don't render the modal unless display is true.
    if (this.props.display === false) {
      return null;
    } else {
      return (
        <div className={styles['carousel-modal']}>
          <div className={styles['carousel-exit']}>
            <button className={styles['exit-modal-button']} onClick={this.props.closeModal}>
              <div className={styles['exit-modal-background']}>
                {svgs.exit}
              </div>
            </button>
          </div>
          <div className={styles['carousel-container']}>
            <div className={styles['left-click']} onClick={this.handleLeftClick}>
              <span className={styles['click-inner']}>{svgs.left}</span>
            </div>
            <div className={styles['carousel-images']} style={{left: this.state.position}}>
              <div className={styles['carousel-host']} onScroll={this.handleScroll}>
                {
                  this.props.carouselImages.map( image => {
                    let id = (image.id) + 5;
                    return (
                      <div className={styles['carousel-item']} key={id}>
                          <span className={styles['carousel-item-border']}>
                              <img className={styles['carousel-image']} src={image.carouselurl}></img>
                          </span>
                      </div>
                    );
                  })
                }
              </div>
            </div>
            <div className={styles['right-click']} onClick={this.handleRightClick}>
              <span className={styles['click-inner']}>{svgs.right}</span>
            </div>
            <div className={styles['carousel-scrollbar']}>
              <div className={styles['carousel-backbar']}>
                <div
                  className={styles['carousel-slider']}
                  ></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
// style={{ left: scrollBoxLeft }}
// onMouseDown={handleSliderMouseDown}

export default Carousel;