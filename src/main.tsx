import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "@radix-ui/themes";

import Router from "./config/router";
import MessageProvider from "./components/provider/message-provider";

import "@radix-ui/themes/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <MessageProvider>
        <Router />
      </MessageProvider>
    </Theme>
  </React.StrictMode>
);
