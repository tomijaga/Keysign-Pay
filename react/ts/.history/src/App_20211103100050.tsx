import React from "react";
import "./App.css";
import KeysignPay from "./components/KeysignPay";

function App() {
  return (
    <div className="App">
      <KeysignPay
        title="Purchase Item Name"
        amount={1234567}
        accountNumber={"0".repeat(60).concat("dead")}
      />
    </div>
  );
}

export default App;
