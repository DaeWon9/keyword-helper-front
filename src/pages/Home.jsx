import React, { useState, useEffect } from "react";
import Sender from "../components/chat/Sender";
import ChatBox from "../components/chat/ChatBox";
import UserBox from "../components/UserBox";
import KeywordBox from "../components/keyword/KeywordBox";
import io from "socket.io-client";
import { searchKeyword } from "../api/Search";
import "./Home.css";
import { Icon, IconSize, LightbulbIcon } from "@channel.io/bezier-react";

const StatusType = {
  Online: "Online",
  Offline: "Offline",
  Lock: "Lock",
  OnlineCrescent: "OnlineCrescent",
  OfflineCrescent: "OfflineCrescent",
};

const socket = io(import.meta.env.VITE_CHAT_BACK_URL, {
  withCredentials: true,
  transports: ["websocket", "polling", "flashsocket"],
});

const Home = () => {
  const [isEnter, setIsEnter] = useState(false);

  const enterRoom = () => {
    socket.emit("enter", "test", "test");
    setIsEnter(true);
  };

  useEffect(() => {
    console.log("try enter");
    enterRoom();
    if (isEnter) {
      console.log("enter");
      socket.on("new_entry", (nickname) => {
        console.log(`${nickname}님이 입장하였습니다.`);
      });

      socket.on("new_message", (msg) => {
        console.log("새로운 메시지가 있습니다.");
        console.log(`'${msg}'`);
      });
    }
  }, [isEnter]);

  return (
    <div className="home">
      <div className="home-left">
        <UserBox name="test1" status={StatusType.Online} />
        <UserBox name="test2" status={StatusType.Offline} />
        <UserBox name="test3" status={StatusType.OfflineCrescent} />
        <UserBox name="test4" status={StatusType.OnlineCrescent} />
        <UserBox name="test5" status={StatusType.Offline} />
        <UserBox name="test6" status={StatusType.Offline} />
        <UserBox name="test7" status={StatusType.Offline} />
      </div>
      <div className="home-right">
        <div className="home-header">KEYWORD-HELPER</div>
        <div className="home-body">
          <div className="home-body-chat">
            <div className="home-body-chat-content">
              <ChatBox />
            </div>
            <div className="home-body-chat-send">
              <Sender socket={socket} />
            </div>
          </div>
          <div className="home-body-menu">
            <div className="home-body-menu-header">
              <Icon source={LightbulbIcon} size={IconSize.L} marginRight={3} marginLeft={10} />
              <h1>Keywords</h1>
            </div>
            <div className="home-body-menu-content">
              {Array.apply(null, Array(10)).map((e, id) => (
                <KeywordBox
                  key={id}
                  colorID={id}
                  keyword={`${id}번째 키워드`}
                  description={`${id}번째 키워드입니다.`}
                  buttonStyle={{ display: "block", margin: "10px 20px" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
