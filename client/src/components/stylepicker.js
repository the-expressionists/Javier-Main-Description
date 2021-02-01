import React from 'react';
import styles from '../style/style.module';

let Stylepicker = (props) => {
  if (!props.product.variantProduct) {
    return null;
  } else {
    return (
      <div id="bottom-spacer" className={styles['bottom-spacer']}>
        <button className={styles['stylepicker-button']}>
          <div className={styles['stylepicker-button-text']}>
            <div className={styles['inline-block']}>
              <div className={styles['variant-type']}>{props.product.variantCategory}</div>
              <div className={styles['purchase-text']}>{props.product.variantType}</div>
            </div>
            <div className={styles['inline-block']}>❯</div>
          </div>
        </button>
        <div className={styles['stylepicker-variants']}>
          {
            props.product.variants.map( variant => {
              return (
                <a key={variant._id} href={variant.linkUrl} className={styles['stylepicker-variant-item']}>
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

export default Stylepicker;