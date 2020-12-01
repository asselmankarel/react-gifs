import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  handleChange = (event) => {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <input type="test" className="form-control form-search" onChange={this.handleChange.bind(this)} />
    );
  }
}

export default SearchBar;
