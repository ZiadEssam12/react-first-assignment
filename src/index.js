import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css"; // Added for bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Added for bootstrap
import "@fortawesome/fontawesome-free/css/all.min.css"; // Added for fontawesome
import "@fortawesome/fontawesome-free/js/all.min.js"; // Added for fontawesome
import "./Components/Header/Header.css"; // Added for Header
import "./Components/Footer/Footer.css"; // Added for Footer
import "./Components/Home/Home.css"; // Added for Home
import "./Components/About/About.css"; // Added for About
import "./Components/Portfolio/Portfolio.css"; // Added for Portfolio
import "./Components/Contact/Contact.css"; // Added for Contact
import "./responsive.css"; // Added for responsive
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

window.addEventListener("scroll", () => {
  const header = document.querySelector("header .container");
  if (window.scrollY > 0) {
    document.querySelector("header .container").classList.remove("py-3");
  } else {
    document.querySelector("header .container").classList.add("py-3");
  }
});
