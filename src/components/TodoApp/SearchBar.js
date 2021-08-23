import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    query: "",
  };

  componentDidUpdate(nextProps, nextState) {
    if (nextState.query !== this.state.query) {
      this.props.onQueryChange(this.state.query);
    }
  }

  onClearQuery = () => {
    this.setState({
      query: "",
    });
  };

  txtQuery_change = (e) => {
    this.setState({ query: e.target.value });
  };

  txtQuery_KeyUp = () => {};
  render() {
    return (
      <div>
        <label style={{ fontWeight: "bold" }}>
          Filter tasks (by name)
          <div className="fg">
            <input
              type="text"
              value={this.state.query}
              onChange={this.txtQuery_change}
              onKeyUp={this.txtQuery_KeyUp}
            />
            <button type="button" onClick={this.onClearQuery}>
              Clear
            </button>
          </div>
        </label>
      </div>
    );
  }
}

export default SearchBar;
