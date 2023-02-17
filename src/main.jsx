import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BezierProvider, DarkFoundation } from "@channel.io/bezier-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BezierProvider foundation={DarkFoundation}>
    <App />
  </BezierProvider>,
);
