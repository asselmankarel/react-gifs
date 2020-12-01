import React, { PureComponent } from 'react';

class Gif extends PureComponent {
  render() {
    const { id } = this.props;
    if (!id) { return null; }
    const src = `https://media2.giphy.com/media/${id}/200.gif`;
    return (
      <img className="gif" alt="selected gif" src={src} />
    );
  }
}

export default Gif;
