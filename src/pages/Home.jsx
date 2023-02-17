import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-left"></div>
      <div className="home-right">
        <div className="home-header"></div>
        <div className="home-body">
          <div className="home-body-chat">
            <div className="home-body-chat-content"></div>
            <div className="home-body-chat-send"></div>
          </div>
          <div className="home-body-menu"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
