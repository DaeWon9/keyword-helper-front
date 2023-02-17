import React from "react";
import { Avatar } from "@channel.io/bezier-react";
import "./UserBox.css";

const UserBox = (props) => {
  return (
    <div className="user-box-container">
      <div className="user-profile">
        <Avatar
          name="Channel.io"
          avatarUrl={`https://picsum.photos/500/500?img=${props.name.charCodeAt(0)}`}
          size={32}
          status={props.status === "connect" ? "Online" : "Offline"}
        />
      </div>
      <div className="user-name">{props.name}</div>
    </div>
  );
};

export default UserBox;
