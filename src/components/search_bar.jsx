import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (event) => {
    const { searchFunction } = this.props;
    searchFunction(event.target.value);
  }

  render() {
    return (
      <input type="test" className="form-control form-search" onChange={this.handleChange.bind(this)} />
    );
  }
}

export default SearchBar;
