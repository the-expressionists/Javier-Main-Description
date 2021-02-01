import React from 'react';
import styles from '../style/style.module';

let Navigation = (props) => {
  let lastIndex = props.breadcrumbs.length - 1;

  let navLink = (page, index) => {
    if (index < props.breadcrumbs.length - 1) {
      return (
        <a href={page.url} className={styles['nav-link']}>
          <span className={styles['hover']}>{page.name}</span>
          <span className={styles['space-around']}>›</span>
        </a>
      );
    } else {
      return (
        <a href={page.url} className={`${styles['nav-link']} ${styles['nav-link-last']}`}>
          <span className={styles['hover']}>{page.name}</span>
        </a>
      );
    }
  }

  return (
    <div className={styles['nav-container']}>
        <ol className={`${styles['nav-list']} ${styles['inline-block']}`}>
            {
              props.breadcrumbs.map( (page, index) => (
                <li key={index} className={styles['nav-item']}>
                  {navLink(page, index)}
                </li>  
              ))
            }
        </ol>
    </div>
  );
};

export default Navigation;