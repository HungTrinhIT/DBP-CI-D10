import React from "react";
import "./UserItem.css";
import { useHistory } from "react-router-dom";

const UserItem = (props) => {
  const { login, avatar_url } = props.user;
  const history = useHistory();
  const onLinkToUserDetail = () => {
    history.push(`/users/${login}`);
  };

  return (
    <div class="user col-12 col-md-6 col-lg-4">
      <img src={avatar_url} alt="ïmg" className="user__avt" />

      <p className="user__name">{login}</p>
      <button className="mt-2 btn btn-secondary" onClick={onLinkToUserDetail}>
        MORE
      </button>
    </div>
  );
};
export default UserItem;
