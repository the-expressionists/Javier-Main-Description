// import React from 'react';
import styles from '../style/style.module';
import NavLink from './navLink';

let Navigation = (props) => (
  <div className={styles['nav-container']}>
      <ol className={`${styles['nav-list']} ${styles['inline-block']}`}>
          {
            props.breadcrumbs.map( (page, index) => (
              <li key={index} className={styles['nav-item']}>
                <NavLink page={page} index={index} length={props.breadcrumbs.length} />
              </li>  
            ))
          }
      </ol>
  </div>
);

export default Navigation;