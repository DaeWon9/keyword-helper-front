import React, { useState, useEffect } from "react";
import Chat from "./Chat";

const ChatBox = (props) => {
  const [chatList, setChatList] = useState();

  let dummyChatData = [
    {
      chatId: "cc",
      name: "admin",
      chatContent: "test1 님이 채팅에 입장하셨습니다.",
    },
    {
      chatId: "cc",
      name: "admin",
      chatContent: "test2 님이 채팅에 입장하셨습니다.",
    },
    {
      chatId: "cc",
      name: "admin",
      chatContent: "test3 님이 채팅에 입장하셨습니다.",
    },
    {
      chatId: "cc",
      name: "admin",
      chatContent: "test4 님이 채팅에 입장하셨습니다.",
    },
    {
      chatId: "cc",
      name: "admin",
      chatContent: "test5 님이 채팅에 입장하셨습니다.",
    },
    {
      chatId: 1,
      name: "test1",
      chatContent:
        "test chat 1test chat 1test chat 1test chat 1test chat 1test chat 1test chat 1test chat 1test chat 1test chat 1test chat 1test chat 1test chat 1test chat 1test chat 1test chat 1test chat 1test chat 1test chat 1test chat 1",
    },
    {
      chatId: 2,
      name: "test2",
      chatContent: "test chat 2",
    },
    {
      chatId: 3,
      name: "test3",
      chatContent: "test chat 3",
    },
    {
      chatId: 4,
      name: "test4",
      chatContent: "test chat 4",
    },
    {
      chatId: 5,
      name: "test5",
      chatContent: "test chat 5",
    },
  ];

  useEffect(() => {
    let list = [];
    dummyChatData.map((chat, index) => [
      list.push(
        <Chat key={index} chatId={chat.chatId} name={chat.name} chatContent={chat.chatContent} />,
      ),
    ]);
    setChatList(list);
  }, []);

  return <div>{chatList}</div>;
};

export default ChatBox;
