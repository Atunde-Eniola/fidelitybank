import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./style/button.css";
import "./style/typography.css";
// import "./style/navbar.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
