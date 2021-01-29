import React from 'react';
import ReactDOM from 'react-dom';
import ProductGallery from './components/productGallery.js';
import Summary from './components/summary.js';
import Purchase from './components/purchase.js';
import Navigation from './components/navigation.js';
import ProductDetails from './components/productDetails.js';
import requests from './utils/requests.js';

const descriptionScript = document.getElementById('descriptionScript');
const itemID = requests.getID();

class MainDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        "name": "",
        "shortName": "",
        "reviews": 0,
        "variantType": "",
        "variantCategory": "",
        "price": 0,
        "carouselImages": [],
        "breadcrumbs": [],
        "variantProduct": false,
        "variants": []
      }
    };

    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    if (itemID === 'no id') {
      requests.findOne(data => {
        this.setState({
          product: data
        });
      });
    } else {
      requests.findByID(itemID, data => {
        if (data !== "") {
          this.setState({
            product: data
          });
        } else {
          console.log(`ERROR: Could not find item with ID: '${itemID}'`);
        }
      });
    }
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