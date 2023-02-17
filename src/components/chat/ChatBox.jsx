import React, { useRef, useState, useEffect } from "react";
import Chat from "./Chat";

const ChatBox = (props) => {
  const [chatList, setChatList] = useState();
  const messageEndRef = useRef(null); // 채팅메세지의 마지막

  useEffect(() => {
    let list = [];
    props.chatData.map((chat, index) => [
      list.push(
        <Chat
          key={index}
          chatId={chat.chatId}
          name={chat.name}
          chatContent={chat.chatContent}
          time={chat.time}
        />,
      ),
    ]);
    list.push(<div ref={messageEndRef}></div>);
    setChatList(list);
  }, [props.chatData]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "auto" });
  }, [chatList]);

  return <div>{chatList}</div>;
};

export default ChatBox;
