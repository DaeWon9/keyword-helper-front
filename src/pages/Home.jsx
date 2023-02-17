import React, { useRef, useEffect } from "react";
import Sender from "../components/chat/Sender";
import ChatBox from "../components/chat/ChatBox";
import io from "socket.io-client";
import "./Home.css";

const Home = () => {
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:4000");
    socketRef.current.on("message", ({ name, message }) => {});
    return () => socketRef.current.disconnect();
  }, []);

  return (
    <div className="home">
      <div className="home-left"></div>
      <div className="home-right">
        <div className="home-header"></div>
        <div className="home-body">
          <div className="home-body-chat">
            <div className="home-body-chat-content">
              <ChatBox />
            </div>
            <div className="home-body-chat-send">
              <Sender />
            </div>
          </div>
          <div className="home-body-menu"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
