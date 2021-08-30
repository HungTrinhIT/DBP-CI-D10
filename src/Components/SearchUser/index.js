import React, { Component } from "react";
import "./SearchUser.css";
class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  onSearchChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  onSubmitSearchUser = (e) => {
    e.preventDefault();
    this.props.onFetchUser(this.state.search);
    this.setState({
      search: "",
    });
  };
  render() {
    const { search } = this.state;
    const { isShow, onClearUser } = this.props;
    return (
      <div className="search">
        <form onSubmit={this.onSubmitSearchUser}>
          <input
            name="search"
            placeholder="Enter username..."
            value={search}
            className="search__input"
            onChange={this.onSearchChange}
          />

          <button type="submit" className="btn btn-primary search__btn">
            Search
          </button>
          {isShow && (
            <button
              className="btn btn-secondary mt-2 search__btn"
              onClick={() => onClearUser()}
            >
              Clear users
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default SearchUser;
