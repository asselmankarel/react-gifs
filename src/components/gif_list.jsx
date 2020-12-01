import React, { PureComponent } from 'react';
import Gif from './gif';

class GifList extends PureComponent {
  render() {
    const { gifs } = this.props;
    return (
      <div className="gif-list">
        {gifs.map(gif => <Gif id={gif.id} key={gif.id} />)}
      </div>
    );
  }
}

export default GifList;
