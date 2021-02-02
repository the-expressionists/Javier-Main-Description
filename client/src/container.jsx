import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style/style.module';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={styles['page-container']}>
          <div className={styles['page-grid-container']}>
              <div className={styles['content-container']}>
                  <div className={styles['component-filler']}>
                    <div id="main"></div>
                  </div>
                  <div className={`${styles['component-filler']} ${styles['grid-2']}`}>
                    <div id="app"></div>
                  </div>
                  <div className={`${styles['component-filler']} ${styles['grid-3']}`}>
                    <div id="reviews"></div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('main'));