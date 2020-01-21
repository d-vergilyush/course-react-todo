import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: ""
  };

  onSearchChange = evt => {
    this.setState({
      term: evt.target.value
    });
    this.props.onSearchChange(evt.target.value);
  };

  render() {
    const { term } = this.state;
    return (
      <input
        type="text"
        className="form-control search-input"
        onChange={this.onSearchChange}
        placeholder="search"
        value={term}
      />
    );
  }
}
