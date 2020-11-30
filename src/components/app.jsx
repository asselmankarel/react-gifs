import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gifs: [] };
  }

  render() {
    return (
      <div className="app">
        <h1>Welcome</h1>
      </div>
    );
  }
}

export default App;
