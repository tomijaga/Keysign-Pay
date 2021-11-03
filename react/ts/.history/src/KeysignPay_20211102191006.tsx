import { FC, useState } from "react";
import { ReactComponent as ScanIcon } from "./icons/scan.svg";

const KeysignPay: FC<Partial<{ title: string; amount: number }>> = ({
  title = "Chess registration fee",
  amount = 60,
}) => {
  const [time, setTime] = useState("19:57");

  console.log({ title });
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
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
          padding: "60px 0px",
        }}
      >
        <div>KeysignPay</div>
        <div
          style={{
            padding: "5px 20px",
            width: "calc( 100% - 40px)",
            backgroundColor: "rgba(21, 101, 216, 0.1)",
            display: "flex",
            alignItems: "space-between",
          }}
        >
          <div></div>
          <span style={{ fontSize: "14px" }}>{time}</span>
        </div>
        <div>
          <div style={{ fontSize: "14px" }}>{title}</div>
          <strong>{amount} TNB</strong>
          <div>
            <button className="app-button">
              {" "}
              <ScanIcon fill="inherit" /> Scan
            </button>
            <button className="app-button"> Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeysignPay;
