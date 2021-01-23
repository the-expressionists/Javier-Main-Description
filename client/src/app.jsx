import React from 'react';
import ReactDOM from 'react-dom';
import ProductCarousel from './components/productCarousel.js';
import Summary from './components/summary.js';
import Purchase from './components/purchase.js';
import Navigation from './components/navigation.js';
import sample from './sample/sampleProduct.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: sample
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(target) {
    console.log(target);
  }

  render() {
    return (
      <div id="main">
        <div id="page-container">
            <div id="page-grid-container">
                <div id="content-container">
                    <Navigation breadcrumbs={this.state.product.breadcrumbs} />
                    <div id="product-grid-container">
                        <ProductCarousel product={this.state.product} />
                        <div id="product-item-description">
                          <Summary product={this.state.product} />
                          <div id="product-details-container">
                            <div className="product-details">
                              <div className="product-details-button">
                                <div className="inline-block">Product details</div>
                                <div className="inline-block">〉</div>
                              </div>
                            </div>
                            <div className="product-details">
                              <div className="product-details-button">
                                <div className="inline-block">Product size</div>
                                <div className="inline-block">〉</div>
                              </div>
                            </div>
                            <div className="product-details">
                              <p className="product-details-button">
                                <div className="inline-block">
                                  <div>Reviews</div>
                                  <div>★★☆☆☆ (222)</div>
                                </div>
                                <div className="inline-block">〉</div>
                              </p>
                            </div>
                          </div>
                        </div>
                        <Purchase product={this.state.product} />
                    </div>
                </div>
                <div className="component-filler grid-2">William's Image Carousel Component</div>
                <div className="component-filler grid-3">Norman's Review Component</div>
            </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
