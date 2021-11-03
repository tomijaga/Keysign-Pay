import React, { useState } from "react";
import "./App.css";
import KeysignPay from "./components/KeysignPay";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setIsVisible(true)}></button>
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
