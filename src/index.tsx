import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom"; // 페이지 이동 처리
import { AuthContextProvider } from "./views/context";
const root = ReactDOM.creatRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </AuthContextProvider>
);

serviceWorker.unregister();