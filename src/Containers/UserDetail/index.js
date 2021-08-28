import React, { Component } from "react";
import axios from "axios";

class UserDetail extends Component {
  state = {
    user: {},
    repos: [],
  };
  async componentDidMount() {
    const login = this.props.match.params.login;
    const response = await axios.get(`https://api.github.com/users/${login}`);
    const responseRepo = await axios.get(
      `https://api.github.com/users/${login}/repos`
    );

    this.setState({
      user: response.data,
      repos: responseRepo.data,
    });
  }
  render() {
    return <div>UserDetail</div>;
  }
}

export default UserDetail;
