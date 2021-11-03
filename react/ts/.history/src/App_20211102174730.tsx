import React from "react";
import logo from "./logo.svg";
import "./App.css";
import KeysignPay from "./KeysignPay";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <KeysignPay />
    </div>
  );
}

export default App;
