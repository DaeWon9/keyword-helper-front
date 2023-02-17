import React from "react";
import KeywordBox from "../components/KeywordBox";

const Login = () => {
  return (
    <div>
      <p>Hello</p>
      {Array.apply(null, Array(15)).map((e, id) => (
        <KeywordBox colorID={id} text={`${id}st Keyword`} />
      ))}
    </div>
  );
};

export default Login;
