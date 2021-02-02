// import React from 'react';
import styles from '../style/style.module';

class Stylepicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.handleHover = this.handleHover.bind(this);
  }

  componentDidMount() {
    this.setState({
      variantType: this.props.product.variantType
    });
  }

  handleHover(event) {
    let variantType = event.target.attributes.name.nodeValue;

    if (variantType !== undefined) {
      this.setState({
        variantType: event.target.attributes.name.nodeValue
      });
    }
  }

  render() {
    let variantType = this.state.variantType ? this.state.variantType : this.props.product.variantType;

    if (!this.props.product.variantProduct) {
      return null;
    } else {
      return (
        <div id="bottom-spacer" className={styles['bottom-spacer']}>
          <button className={styles['stylepicker-button']}>
            <div className={styles['stylepicker-button-text']}>
              <div className={styles['inline-block']}>
                <div className={styles['variant-type']}>{this.props.product.variantCategory}</div>
                <div className={styles['purchase-text']}>{variantType}</div>
              </div>
              <div className={styles['inline-block']}>❯</div>
            </div>
          </button>
          <div className={styles['stylepicker-variants']}>
            {
              this.props.product.variants.map( variant => {
                return (
                  <a key={variant._id} onMouseOver={this.handleHover} name={variant.name} href={variant.linkUrl} className={styles['stylepicker-variant-item']}>
                    <div className={styles['variant-image-container']}>
                      <img src={variant.imageUrl} className={styles['variant-image']}></img>
                    </div>
                  </a>
                );
              })
            }
          </div>
        </div>
      );
    }
  }
}

export default Stylepicker;