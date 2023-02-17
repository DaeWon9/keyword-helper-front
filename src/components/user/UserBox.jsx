import React from "react";
import { Avatar } from "@channel.io/bezier-react";
import "./UserBox.css";

const UserBox = (props) => {
  return (
    <div className="user-box-container">
      <div className="user-profile">
        <Avatar
          name="Channel.io"
          avatarUrl="https://cf.channel.io/thumb/200x200/pub-file/1/606d87d059a6093594c0/ch-symbol-filled-smiley-bg.png"
          size={32}
          status={props.status === "connect" ? "Online" : "Offline"}
        />
      </div>
      <div className="user-name">{props.name}</div>
    </div>
  );
};

export default UserBox;
