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
                  <div id="main-description-component" className='component-filler'>
                    <div id="main"></div>
                  </div>
                  <div id="similar-items-component" className="component-filler grid-2">
                    <div id="app"></div>
                  </div>
                  <div id="reviews-component" className="component-filler grid-3">
                    <div id="reviews"></div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('main'));