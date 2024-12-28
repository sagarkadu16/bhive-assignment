import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/variables.css";
import "./assets/styles/tailwind.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
