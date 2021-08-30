import React, { Component } from "react";
import Button from "../Button";
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

          <Button label="Search" type="submit" color="primary" />
          {isShow && (
            <Button
              label={1}
              color="secondary"
              type="button"
              onClick={onClearUser}
            />
          )}
        </form>
      </div>
    );
  }
}

export default SearchUser;
