import React, { Component } from "react";
import UserAPI from "../../Services/user";
import Users from "../../Components/Users";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    try {
      this.setState({
        isLoading: true,
      });
      const response = await UserAPI.fetchUsers();
      this.setState({
        users: response.data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { users } = this.state;
    const { history } = this.props;
    return (
      <div className="mt-3">
        <Users users={users} history={history} />
      </div>
    );
  }
}

export default Home;
