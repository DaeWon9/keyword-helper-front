import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = function () {
  let [id, setId] = useState("");
  let [nickName, setNickName] = useState("");

  let navigate = useNavigate();

  const checkInputValue = () => {
    if (id === "") {
      alert("아이디를 입력해주세요");
    } else if (nickName === "") {
      alert("닉네임을 입력해주세요");
    } else {
      localStorage.setItem("userId", id);
      localStorage.setItem("userNickName", nickName);
      navigate("/chat");
    }
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      checkInputValue();
    }
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <div className="logo">Keyword Helper</div>
        <div className="login-input-container">
          <div className="login-label">ID</div>
          <input
            className="login-input"
            type="text"
            placeholder="id를 입력해주세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="login-input-container">
          <div className="login-label">닉네임</div>
          <input
            className="login-input"
            type="text"
            placeholder="닉네임을 입력해주세요"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            onKeyPress={handleOnKeyPress}
          />
        </div>

        <div className="login-button" onClick={checkInputValue}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
