import { FC, useState } from "react";
import { ReactComponent as ScanIcon } from "./icons/scan.svg";
import { ReactComponent as CopyIcon } from "./icons/copy.svg";

const KeysignPay: FC<Partial<{ title: string; amount: number }>> = ({
  title = "Chess registration fee",
  amount = 60,
}) => {
  const [time, setTime] = useState("19:57");

  console.log({ title });
  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      className="mask h-screen w-screen flex items-center justify-center  absolute top-0"
    >
      <div
        className="bg-white border-gray-300 border"
        style={{
          height: "90vh",
          maxHeight: "812px",
          width: "375px",
          backgroundColor: "white",
          position: "absolute",
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
        <div style={{ width: "calc(100% - 30px)", padding: "20px" }}>
          <div style={{ fontSize: "14px" }}>{title}</div>
          <strong>{amount} TNB</strong>

          <div
            style={{
              backgroundColor: "rgba(21, 101, 216, 0.5)",
              padding: "5px",
              borderRadius: "20px",
            }}
          >
            <button className="app-button">
              <ScanIcon fill="white" /> Scan
            </button>
            <button className="app-button">
              <CopyIcon />
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeysignPay;
