import React from 'react';
import ReactDOM from 'react-dom';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="page-container">
          <div id="page-grid-container">
              <div id="content-container">
                  <div id="main-description-component" className='component-filler'>Joe's Main Description Component</div>
                  <div id="similar-items-component" className="component-filler grid-2">William's Image Carousel Component</div>
                  <div id="reviews-component" className="component-filler grid-3">Norman's Review Component</div>
              </div>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('main'));