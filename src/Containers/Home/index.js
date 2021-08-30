import React, { Component } from "react";
import SearchUser from "../../Components/SearchUser";
import UserAPI from "../../Services/user";

import Users from "../../Components/Users";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isShow: false,
      isLoading: false,
    };
  }

  onFetchUser = async (search) => {
    // Fetch User
    this.setState({
      isLoading: true,
    });
    try {
      // const response =await axios.get(`${baseURL}/search/users?q=${search}`)
      const response = await UserAPI.fetchUser(search);
      this.setState({
        users: response.data.items,
        isShow: true,
        isLoading: false,
      });
    } catch (err) {
      console.log(err);
    }

    // Set State
  };

  onClearUser = () => {
    this.setState({
      users: [],
      isShow: false,
    });
  };
  render() {
    const { users, isShow, isLoading } = this.state;
    return (
      <div>
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

export default Home;

// Cách 1
// fetchUser = (search) => {
//   // Fetch User
//   axios
//     .get(`https://api.github.com/search/users?q=${search}`)
//     .then((response) => {
//       this.setState({
//         users: response.data.items,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   // Set State
// };
