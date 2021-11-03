import React, { useState } from "react";
import "./App.css";
import KeysignPay from "./components/KeysignPay";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <input
        type="button"
        className="app-button w-12"
        value="Purchase an Item"
        onClick={() => setIsVisible(true)}
      />
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
