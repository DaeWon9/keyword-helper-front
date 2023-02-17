import React from "react";
import "./Chat.css";

const Chat = (props) => {
  return (
    <div className="chat-container">
      <div className="chat-left">{props.name}</div>
      <div className="chat-right">{props.chatContent}</div>
    </div>
  );
};

export default Chat;
