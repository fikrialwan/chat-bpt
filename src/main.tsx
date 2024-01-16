import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./config/router";
import MessageProvider from "./component/provider/message-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MessageProvider>
      <Router />
    </MessageProvider>
  </React.StrictMode>
);
