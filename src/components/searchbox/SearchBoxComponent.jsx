import React, { Component } from "react";
import "./search-box.style.css";

export class SearchBoxComponent extends Component {
  render() {
    return (
      <input className='search'
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.handleChange}
      />
    );
  }
}

export default SearchBoxComponent;
