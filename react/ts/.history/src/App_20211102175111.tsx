import React from "react";
import logo from "./logo.svg";
import "./App.css";
import KeysignPay from "./KeysignPay";

function App() {
  return (
    <>
      Shit you less get it
      <div
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
        }}
      >
        <KeysignPay />
      </div>
    </>
  );
}

export default App;
