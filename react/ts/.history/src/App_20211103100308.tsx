import React from "react";
import "./App.css";
import KeysignPay from "./components/KeysignPay";

function App() {
  return (
    <div className="App">
      Like who says you shoulde be above everyone else
      <KeysignPay
        title="Purchase Item Name"
        amount={1234567}
        accountNumber={"0".repeat(60).concat("dead")}
      />
      <div
        style={{ zIndex: 100, backgroundColor: "red", width: 200, height: 200 }}
      >
        Crazy z-index
      </div>
    </div>
  );
}

export default App;
