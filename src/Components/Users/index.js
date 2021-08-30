import React from "react";
import UserItem from "../UserItem";
import Loading from "../../Layouts/Loading";
const Users = (props) => {
  const { users, isLoading } = props;
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="row">
      {users.map((userItem, index) => {
        return <UserItem user={userItem} key={index} />;
      })}
    </div>
  );
};
export default Users;
