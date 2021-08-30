import React from "react";
import Loading from "../Loading/Loading";
import UserItem from "../UserItem";
const Users = (props) => {
  const { users, isLoading } = props;
  return (
    <>
      <Loading isLoading={isLoading} />
      <div className="row">
        {users.map((userItem, index) => {
          return <UserItem user={userItem} key={index} />;
        })}
      </div>
    </>
  );
};
export default Users;
