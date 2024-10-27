import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SectionOne from "./SectionOne";
import reportWebVitals from "./reportWebVitals";
import Services from "./Services";
import Industries from "./Industries";
import Portfolio from "./Portfolio";
import Insights from "./Insights";
import Clients from "./Clients";
import GotProject from "./GotProject";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <div style={{ width: "fit-content", height: "auto" }}>
      <SectionOne />
      <Services />
      <Industries />
      <Portfolio />
      <Insights />
      <Clients />
      <GotProject></GotProject>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
