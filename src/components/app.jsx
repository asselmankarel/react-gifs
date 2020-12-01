import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [
        { id: 'BBkKEBJkmFbTG' },
        { id: 'Ymbd9FFkGz1lYurgeZ' }
      ],
      selectedGifId: 'BBkKEBJkmFbTG'
    };
  }

  search = (query) => {
    giphy('8c8fgmbVTeVDyAJp19Q6o5m9ILMnLXFU').search({
      q: query,
      limit: 10,
      rating: 'g'
    }, (error, result) => {
      this.setState({ gifs: result.data });
    });
  }

  render() {
    const { gifs, selectedGifId } = this.state;
    return (
      <div className="app">
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
