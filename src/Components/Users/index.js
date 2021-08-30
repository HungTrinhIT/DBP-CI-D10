import React from "react";
import Loading from "../Loading/Loading";
import UserItem from "../UserItem";
const Users = (props) => {
  const { users, isLoading, history } = props;
  return (
    <>
      <Loading isLoading={isLoading} />
      <div className="row">
        {users.map((userItem, index) => {
          return <UserItem user={userItem} key={index} history={history} />;
        })}
      </div>
    </>
  );
};
export default Users;
