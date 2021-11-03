import React from "react";

const KeysignPay = () => {
  return (
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
        gridTemplateRows: "40px 26px auto",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div>keysign</div>
      <div
        style={{
          width: "100%",
          backgroundColor: "rgba(21, 101, 216, 0.1)",
          display: "flex",
          alignItems: "space-between",
        }}
      >
        <div></div>
      </div>
      <div>pay</div>
    </div>
  );
};

export default KeysignPay;
