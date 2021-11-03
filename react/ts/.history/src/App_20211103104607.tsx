import React, { useState } from "react";
import "./App.css";
import KeysignPay from "./components/KeysignPay";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <button className="app-button w-60" onClick={() => setIsVisible(true)}>
        Purchase an Item
      </button>

      <KeysignPay
        title="Purchase Item Name"
        amount={1234567}
        accountNumber={"0".repeat(60).concat("dead")}
        visible={isVisible}
        onPageClose={() => setIsVisible(false)}
      />
    </div>
  );
}

export default App;
