import React, { useState, useEffect } from "react";
import { BiPaperPlane } from "react-icons/bi";
import "./Sender.css";

const Sender = (props) => {
  let [inputContent, setInputContent] = useState("");
  let name = "test";

  useEffect(() => {
    if (inputContent === "\n") {
      setInputContent("");
    }
  }, [inputContent]);

  const onMessageSubmit = (e) => {
    if (inputContent === "") {
      return;
    }
    props.socket.emit("new_message", inputContent);
    e.preventDefault();
    setInputContent("");
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onMessageSubmit(e);
    }
  };

  return (
    <div className="chat-sender-container">
      <textarea
        className="chat-input-box"
        placeholder="Type a message"
        value={inputContent}
        onChange={(e) => setInputContent(e.target.value)}
        onKeyPress={handleOnKeyPress}
      />
      <div className="send-button" onClick={onMessageSubmit}>
        {<BiPaperPlane />}
      </div>
    </div>
  );
};

export default Sender;
