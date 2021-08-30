import React, { Component } from "react";
import SearchUser from "../../Components/SearchUser";
import UserAPI from "../../Services/user";
import Users from "../../Components/Users";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isShow: false,
      isLoading: false,
      isError: false,
    };
  }

  onFetchUser = async (search) => {
    if (!search) {
      this.setState({ isError: true });
      setTimeout(() => {
        this.setState({ isError: false });
      }, 2000);
      return;
    }

    // Fetch User
    this.setState({
      isLoading: true,
    });
    try {
      // const response =await axios.get(`${baseURL}/search/users?q=${search}`)
      const response = await UserAPI.searchUser(search);
      this.setState({
        users: response.data.items,
        isShow: true,
        isLoading: false,
      });
    } catch (err) {
      console.log(err);
    }
  };

  onClearUser = () => {
    this.setState({
      users: [],
      isShow: false,
    });
  };
  render() {
    const { users, isShow, isLoading, isError } = this.state;
    return (
      <div>
        {isError && (
          <div className="alert alert-danger mt-2">
            <p>Loi ròi</p>
          </div>
        )}
        <SearchUser
          onFetchUser={this.onFetchUser}
          isShow={isShow}
          onClearUser={this.onClearUser}
        />
        <Users users={users} isLoading={isLoading} />
      </div>
    );
  }
}

export default Search;
