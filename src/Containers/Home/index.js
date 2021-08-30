import React, { Component } from "react";
import Users from "../../Components/Users";
import UserAPI from "../../Services/user";

class Home extends Component {
  state = {
    users: [],
    isLoading: false,
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await UserAPI.fetchUser();
    this.setState({
      users: response.data,
      isLoading: false,
    });
  }
  render() {
    return (
      <div className="mt-5">
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default Home;
