import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
/* Changing Inline CSS using React JS*/

const inlineCss = {
  color: "red"
};

ReactDOM.render(
  <div>
    <h1>Changing Inline CSS using React Js </h1>
    <p style={inlineCss}>See this Line</p>
  </div>,
  document.getElementById("root")
);
