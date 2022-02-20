import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ResultProvider } from "./contexts/ResultContextProvider";
ReactDOM.render(
  <ResultProvider>
    <Router>
      <App />
    </Router>
  </ResultProvider>,
  document.getElementById("root")
);
