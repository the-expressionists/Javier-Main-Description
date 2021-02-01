import React from 'react';
import ReviewStars from './reviewStars.js';
import Stylepicker from './stylepicker.js';
import styles from '../style/style.module';

class Purchase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: 0
      //May need refactoring if there is no state to take care of.
    };
  }

  render() {
    return (
      <div className={styles['product-purchase']}>
        <div className={styles['product-purchase-price']}>
            <div className={styles['price-container']}>
              <div className={styles['price-infobox inline-block']}>
                <div className={styles['price-name']}>{this.props.product.name}</div>
                <div className={styles['price-description']}>{this.props.product.shortName + ((this.props.product.variantProduct) ? ',' : '')}</div>
                <div className={styles['purchase-text']}>{this.props.product.variantType}</div>
              </div>
              <div>
                <div className={styles['price-tag-container']}>
                  <div className={styles['price-tag']}>$</div>
                  <div className={styles['price-tag']}>{Math.floor(this.props.product.price) || 0}</div>
                  <div className={styles['price-tag']}>{'.' + (Math.floor((this.props.product.price % 1) * 100) + '0').slice(-2)}</div>
                </div>
              </div>
            </div>
            <div name="reviews-button">
              <ReviewStars stars={this.props.product.averageRating} include={true} reviews={this.props.product.reviews}/>
            </div>
        </div>
        <Stylepicker product={this.props.product} />
        <div className={styles['bottom-space styles.flex']}>
            <div className={styles['cart-add']}>Add to cart</div>
            <div className={styles['cart-like']}>
              <div>♡</div>
            </div>
        </div>
        <div className={styles['product-purchase-availability']}>
            <div className={styles['availability-delivery']}>
              <svg className={styles['availability-svg']} viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M1 4H16V7.00001L19.0246 7L23.0039 12.6848V18H20.3472C19.9254 19.3056 18.6999 20.25 17.2539 20.25C15.8079 20.25 14.5824 19.3056 14.1607 18H10.2563C9.83456 19.3056 8.60911 20.25 7.16309 20.25C5.71707 20.25 4.49161 19.3056 4.06984 18H1V4ZM4.06984 16C4.49161 14.6944 5.71707 13.75 7.16309 13.75C8.60911 13.75 9.83456 14.6944 10.2563 16H14V6H3V16H4.06984ZM16 14.0007C16.3858 13.8392 16.8095 13.75 17.2539 13.75C18.6999 13.75 19.9254 14.6944 20.3472 16H21.0039V13.3152L17.9833 9L16 9.00001V14.0007ZM7.16309 15.75C6.47273 15.75 5.91309 16.3096 5.91309 17C5.91309 17.6904 6.47273 18.25 7.16309 18.25C7.85344 18.25 8.41309 17.6904 8.41309 17C8.41309 16.3096 7.85344 15.75 7.16309 15.75ZM17.2539 15.75C16.5635 15.75 16.0039 16.3096 16.0039 17C16.0039 17.6904 16.5635 18.25 17.2539 18.25C17.9443 18.25 18.5039 17.6904 18.5039 17C18.5039 16.3096 17.9443 15.75 17.2539 15.75Z"></path>
              </svg>
              <div className={styles['availability-spacer']}>You can see stock availability and delivery options at checkout.</div>
            </div>
            <div className={styles['availability-stock']}>
              <svg className={styles['availability-svg']} viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M22 20V4H2v16h20zM20 6H4v12h3v-8h10v8h3V6zm-9 6H9v6h2v-6zm2 6h2v-6h-2v6z"></path>
              </svg>
              <div className={styles['availability-spacer']}>
                <div>
                  <a href="#" className={styles['underline']}>Check in-store stock</a>
                </div>
              </div>
            </div>
            <div className={styles['availability-assembly']}>
              <svg className={styles['availability-svg']} viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 4H16V5L18 5V6H22V8H18V9H16V11H12.1439L10.7803 14H13V20H4V14H5.58336L6.947 11H4V4ZM6 6H14V9H6V6ZM8.58336 14L9.947 11H9.14391L7.78028 14H8.58336ZM6 16H11V18H6V16Z"></path>
              </svg>
              <div className={styles['availability-spacer']}>
                <div>Have it assembled for you. <a href="#" className={styles['underline']}>Read More</a></div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Purchase;