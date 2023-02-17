import React from "react";
import { Avatar } from "@channel.io/bezier-react";
import "./Chat.css";

const Chat = (props) => {
  let time = String(props.time);
  time = String(time.split("T")[1]).split(".")[0];

  return props.chatId === "admin" ? (
    <div className="chat-container" style={{ justifyContent: "center", padding: "5px" }}>
      <div className="chat-right-content" style={{ color: "gray" }}>
        {props.chatContent} {props.time}
      </div>
    </div>
  ) : (
    <div className="chat-container">
      <div className="chat-left">
        <Avatar
          name="Channel.io"
          avatarUrl="https://cf.channel.io/thumb/200x200/pub-file/1/606d87d059a6093594c0/ch-symbol-filled-smiley-bg.png"
          size={42}
        />
      </div>
      <div className="chat-right">
        <span className="chat-right-name">{props.name}</span>
        <span className="chat-right-time">{time}</span>
        <div className="chat-right-content">{props.chatContent}</div>
      </div>
    </div>
  );
};

export default Chat;
