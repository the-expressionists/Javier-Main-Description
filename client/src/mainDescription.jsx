// import React from 'react';
import ReactDOM from 'react-dom';
import ProductGallery from './components/productGallery';
import Summary from './components/summary';
import Purchase from './components/purchase';
import Navigation from './components/navigation';
import ProductDetails from './components/productDetails';
import requests from './utils/requests';
import styles from './style/style.module';

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
        console.log("else: ", data)
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

  render() {
    return (
      <div className={styles['product-globals']}>
        <Navigation breadcrumbs={this.state.product.breadcrumbs} />
        <div className={styles['product-grid-container']}>
            <ProductGallery product={this.state.product} />
            <div className={styles['product-item-description']}>
              <Summary product={this.state.product} />
              <div className={styles['product-details-container']}>
                <ProductDetails product={this.state.product} title="Product Details"/>
                <ProductDetails product={this.state.product} title="Product size"/>
                <ProductDetails product={this.state.product} title="Reviews" isReview={true} name="reviews-button" />
              </div>
            </div>
            <Purchase product={this.state.product} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MainDescription />, document.getElementById('main'));