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
                  <div className='component-filler'>Joe's Main Description Component</div>
                  <div className="component-filler grid-2">William's Image Carousel Component</div>
                  <div className="component-filler grid-3">Norman's Review Component</div>
              </div>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('main'));