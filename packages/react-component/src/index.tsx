import React from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "./component";

ReactDOM.render(
  <React.StrictMode>
    <ReactComponent />
  </React.StrictMode>,
  document.querySelector("#root")
);
