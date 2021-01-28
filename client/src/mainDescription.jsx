import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductGallery from './components/productGallery.js';
import Summary from './components/summary.js';
import Purchase from './components/purchase.js';
import Navigation from './components/navigation.js';
import ProductDetails from './components/productDetails.js';
import sample from './sample/sampleProduct.js';
import requests from './utils/requests.js';

//To display a specific item, change ID to the item's ID
// const ID = '0x5488D6Bea531AEeDa70f716d9';

class MainDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        "carouselImages": [],
        "breadcrumbs": [],
        "variantProduct": false,
        "variants": []
      }
    };

    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    //Save a reference to the app to use setState inside the api call.
    requests.findOne(data => {
      this.setState({
        product: data
      });
    });
  }

  handleClick(target) {
    console.log(target);
  }

  render() {
    return (
      <div>
        <Navigation breadcrumbs={this.state.product.breadcrumbs} />
        <div id="product-grid-container">
            <ProductGallery product={this.state.product} />
            <div id="product-item-description">
              <Summary product={this.state.product} />
              <div id="product-details-container">
                <ProductDetails product={this.state.product} title="Product Details"/>
                <ProductDetails product={this.state.product} title="Product size"/>
                <ProductDetails product={this.state.product} title="Reviews" isReview={true} reviewBar="★★☆☆☆ (222)" />
              </div>
            </div>
            <Purchase product={this.state.product} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MainDescription />, document.getElementById('main'));