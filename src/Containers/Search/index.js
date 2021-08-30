import React, { Component } from "react";
import SearchUser from "../../Components/SearchUser";
import UserAPI from "../../Services/user";

import Users from "../../Components/Users";
import Alert from "../../Layouts/Alert";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      isShowButtonClear: false,
      isShowAlert: false,
    };
  }

  onFetchUser = async (search) => {
    if (!search) {
      this.setState({
        isShowAlert: true,
      });
      setTimeout(() => {
        this.setState({
          isShowAlert: false,
        });
      }, 2000);
      return;
    }

    try {
      // const response =await axios.get(`${baseURL}/search/users?q=${search}`)
      this.setState({
        isLoading: true,
        users: [],
      });
      const response = await UserAPI.searchUser(search);
      this.setState({
        users: response.data.items,
        isLoading: false,
        isShowButtonClear: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  onClearUsers = () => {
    this.setState({
      users: [],
      isShowButtonClear: false,
    });
  };

  render() {
    const { users, isLoading, isShowButtonClear, isShowAlert } = this.state;

    return (
      <div>
        {isShowAlert && (
          <Alert
            msg="Please enter the username before searching"
            type="danger"
          />
        )}
        <SearchUser
          onFetchUser={this.onFetchUser}
          isShowButtonClear={isShowButtonClear}
          onClearUsers={this.onClearUsers}
        />
        <Users
          users={users}
          isLoading={isLoading}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default Search;
