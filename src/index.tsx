import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles.css"

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}