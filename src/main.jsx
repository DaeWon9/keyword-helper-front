import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BezierProvider, LightFoundation } from "@channel.io/bezier-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BezierProvider foundation={LightFoundation}>
    <App />
  </BezierProvider>,
);
