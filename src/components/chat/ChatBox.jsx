import React, { useState, useEffect } from "react";
import Chat from "./Chat";

const ChatBox = (props) => {
  const [chatList, setChatList] = useState();

  let dummyChatData = [
    {
      name: "test1",
      chatContent: "test chat 1",
    },
    {
      name: "test2",
      chatContent: "test chat 2",
    },
    {
      name: "test3",
      chatContent: "test chat 3",
    },
    {
      name: "test4",
      chatContent: "test chat 4",
    },
    {
      name: "test5",
      chatContent: "test chat 5",
    },
  ];

  useEffect(() => {
    let list = [];
    dummyChatData.map((chat) => [
      list.push(<Chat name={chat.name} chatContent={chat.chatContent} />),
    ]);
    setChatList(list);
  }, []);

  return <div>{chatList}</div>;
};

export default ChatBox;
