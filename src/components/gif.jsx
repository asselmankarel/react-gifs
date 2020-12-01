import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const { id } = this.props;
    if (!id) { return null; }
    const src = `https://media2.giphy.com/media/${id}/200.gif`;
    return (
      <img className="gif" alt="selected gif" src={src} onClick={this.handleClick} />
    );
  }
}

export default Gif;
