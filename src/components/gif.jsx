import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = { url: 'https://media2.giphy.com/media/BBkKEBJkmFbTG/200.gif' };
  }

  render() {
    const { url } = this.state;
    return (
      <img className="gif" alt="selected gif" src={url} />
    );
  }
}

export default Gif;