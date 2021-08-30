import axios from "axios";

const baseURL = "https://api.github.com";

const UserAPI = {
  searchUser: (search) => {
    return axios.get(`${baseURL}/search/users?q=${search}`);
  },
  fetchUser: () => {
    return axios.get(`${baseURL}/users`);
  },
};

export default UserAPI;
