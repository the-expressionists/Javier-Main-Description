import styles from '../style/style.module';

let NavLink = (props) => {
  let {page, index, length} = props;
  
  if (index < length - 1) {
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
};

export default NavLink;