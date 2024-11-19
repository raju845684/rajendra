import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-sweet-progress/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import "./scss/style.css";
import "./scss/responsive.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
reportWebVitals();
