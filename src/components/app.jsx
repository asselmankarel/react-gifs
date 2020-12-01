import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gifs: [] };
  }

  render() {
    return (
      <div className="app">
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif />
          </div>
        </div>
        <div className="right-scene">
         
        </div>
      </div>
    );
  }
}

export default App;
