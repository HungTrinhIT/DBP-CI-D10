import React, { Component } from "react";
import SearchUser from "../../Components/SearchUser";
import UserAPI from "../../Services/user";

import Users from "../../Components/Users";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  // Cách 2
  onFetchUser = async (search) => {
    // Fetch User
    try {

      // const response =await axios.get(`${baseURL}/search/users?q=${search}`)
      const response = await UserAPI.fetchUser(search);
      this.setState({
        users: response.data.items,
      });
    } catch (err) {
      console.log(err);
    }

    // Set State
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <SearchUser onFetchUser={this.onFetchUser} />
        <Users users={users} />
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
