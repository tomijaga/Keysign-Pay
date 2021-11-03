import React from "react";

const KeysignPay = () => {
  return (
    <div
      style={{
        height: "80vh",
        backgroundColor: "white",
        border: "0.5px solid #737B7D",
        position: "absolute",

        boxSizing: "border-box",
        display: "grid",
        gridTemplateRows: "30px 10px auto",
        justifyContent: "center",
      }}
    >
      <div>keysign</div>
      <div>loading</div>
      <div>pay</div>
    </div>
  );
};

export default KeysignPay;
