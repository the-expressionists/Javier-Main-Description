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
    target = 2;
  }

  render() {
    return (
      <div>React Running</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));