import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(target) {

  }

  render() {
    return (
      <div>React Running</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));