import React, { useState } from "react";
import "./App.css";
import KeysignPay from "./components/KeysignPay";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <input
        type="button"
        className="app-button"
        value="Purchase an Item"
        onClick={() => setIsVisible(true)}
      />
      <button></button>
      <KeysignPay
        title="Purchase Item Name"
        amount={1234567}
        accountNumber={"0".repeat(60).concat("dead")}
        visible={isVisible}
      />
    </div>
  );
}

export default App;
