import { useState } from "react";

const KeysignPay = () => {
  const [time, setTime] = useState("19:57");

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        position: "absolute",
        top: "0%",
      }}
    >
      <div
        style={{
          height: "90vh",
          maxHeight: "812px",
          width: "375px",
          backgroundColor: "white",
          border: "0.5px solid #737B7D",
          position: "absolute",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "40px 30px auto",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <div>keysign</div>
        <div
          style={{
            width: "375px",
            backgroundColor: "rgba(21, 101, 216, 0.1)",
            display: "flex",
            padding: "5px 20px",
            alignItems: "space-between",
          }}
        >
          <div></div>
          <span>{time}</span>
        </div>
        <div>pay</div>
      </div>
    </div>
  );
};

export default KeysignPay;
