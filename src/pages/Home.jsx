import React, { useState, useEffect } from "react";
import Sender from "../components/chat/Sender";
import ChatBox from "../components/chat/ChatBox";
import UserList from "../components/user/UserList";
import io from "socket.io-client";
import { searchKeyword } from "../api/Search";
import "./Home.css";
import KeywordMenu from "../components/keyword/KeywordMenu";

const socket = io(import.meta.env.VITE_CHAT_BACK_URL, {
  withCredentials: true,
  transports: ["websocket", "polling", "flashsocket"],
});

const Home = () => {
  const [isEnter, setIsEnter] = useState(false);
  const [chatData, setChatData] = useState([]);
  const [userStatus, setUserStatus] = useState([]);

  const enterRoom = () => {
    socket.emit("enter", "test", "test");
    setIsEnter(true);
  };

  useEffect(() => {
    if (isEnter) {
      socket.on("new_entry", (nickname, users) => {
        users = users.sort((a, b) => {
          // 이름순으로 정렬
          if (a.nickname > b.nickname) return 1;
          if (a.nickname < b.nickname) return -1;
        });

        users = users.sort((a) => {
          if (a.status === "connect") return -1;
        });

        users = users.sort((a) => {
          // 본인은 맨 앞으로
          if (a.nickname === "test") return -1;
        });

        setUserStatus(users);
        setChatData((prevList) => [
          ...prevList,
          {
            chatId: "admin",
            chatContent: `${nickname}님이 입장하였습니다.`,
          },
        ]);
      });

      socket.on("new_leave", (nickname, users) => {
        users = users.sort((a, b) => {
          // 이름순으로 정렬
          if (a.nickname > b.nickname) return 1;
          if (a.nickname < b.nickname) return -1;
        });

        users = users.sort((a) => {
          if (a.status === "connect") return -1;
        });

        users = users.sort((a) => {
          // 본인은 맨 앞으로
          if (a.nickname === "test") return -1;
        });
        setUserStatus(users);
      });

      socket.on("new_message", (msg, nickname, chat) => {
        setChatData((prevList) => [
          ...prevList,
          {
            name: nickname,
            chatContent: chat,
            time: msg,
          },
        ]);
      });

      socket.on("prev_message", (msg) => {
        msg.map((chat) => {
          setChatData((prevList) => [
            ...prevList,
            {
              name: chat.nickname,
              chatContent: chat.chat,
              time: chat.created_at,
            },
          ]);
        });
      });

      socket.on("not_read", (msg) => {
        alert(`${msg}개의 읽지 않은 메세지가 존재합니다.`);
      });
    } else {
      enterRoom();
    }
  }, [isEnter]);

  return (
    <div className="home">
      <div className="home-left">
        <UserList userStatus={userStatus} />
      </div>
      <div className="home-right">
        <div className="home-header">KEYWORD-HELPER</div>
        <div className="home-body">
          <div className="home-body-chat">
            <div className="home-body-chat-content">
              <ChatBox chatData={chatData} />
            </div>
            <div className="home-body-chat-send">
              <Sender socket={socket} />
            </div>
          </div>
          <div className="home-body-menu">
            <KeywordMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
