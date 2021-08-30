import React, { Component } from "react";
import axios from "axios";
import Button from "../../Components/Button";

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

  onBackToHome = () => {
    // this.props.history.push("/");
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <Button
          label="Back to home"
          onClick={this.onBackToHome}
          color="success"
        />
      </div>
    );
  }
}

export default UserDetail;
