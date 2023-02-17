import React, { useEffect, useState } from "react";
import UserBox from "./UserBox";

const UserList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let list = [];
    props.userStatus.map((user) => {
      list.push(<UserBox name={user.nickname} status={user.status} />);
    });
    setUsers(list);
  }, [props.userStatus]);

  return <div>{users}</div>;
};

export default UserList;
