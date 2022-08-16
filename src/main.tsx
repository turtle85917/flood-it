import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import ReactTooltip from "react-tooltip";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ReactTooltip
      id="button"
      getContent={(dataTip) => {
        if (!dataTip) return;
        if (dataTip === "submit") return "눌러서 적용해보세요.";
        if (dataTip === "restart") return "새로 고침하실려면 누르세요.";

        return "이게 무슨 버튼이죠...?"
      }}
      />
  </React.StrictMode>
);