import React from "react";
import { hydrate, render } from "react-dom";
import "./styles/index.scss";
import "normalize.css";
import App from "App";

const rootElement = document.getElementById("root");
const renderFunction = rootElement?.hasChildNodes() ? hydrate : render;

renderFunction(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  rootElement
);
