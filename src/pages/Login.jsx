import React from "react";
import KeywordBox from "../components/keyword/KeywordBox";

const Login = () => {
  return (
    <div>
      <p>Hello</p>
      {Array.apply(null, Array(30)).map((e, id) => (
        <KeywordBox
          key={id}
          colorID={id}
          keyword={`키워드 ${id}`}
          description={"홍길동의 영웅적 일대기를 통해 적서 차별제도와 탐관 오리들의 횡포를 비판함."}
          buttonStyle={{ margin: "10px", display: "block" }}
        />
      ))}
    </div>
  );
};

export default Login;
