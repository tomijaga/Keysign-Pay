import { FC, useState } from "react";
import { ReactComponent as ScanIcon } from "./icons/scan.svg";
import { ReactComponent as CopyIcon } from "./icons/copy.svg";
import { ReactComponent as KeysignLogo } from "./icons/logo.svg";
import { ReactComponent as LoadingIcon } from "./icons/loading.svg";

const KeysignPay: FC<Partial<{ title: string; amount: number }>> = ({
  title = "Chess registration fee",
  amount = 60,
}) => {
  const [time, setTime] = useState("19:57");

  console.log({ title });
  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      className="mask h-screen w-screen flex items-center justify-center  absolute top-0 "
    >
      <div
        className="bg-white border-gray-300 border gap-3 py-16"
        style={{
          height: "90vh",
          maxHeight: "812px",
          width: "375px",
          backgroundColor: "white",
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "40px 30px auto",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <KeysignLogo />
        <div
          className="px-5 py-1 w-full flex justify-between"
          style={{
            backgroundColor: "rgba(21, 101, 216, 0.1)",
            display: "flex",
            alignItems: "space-between",
          }}
        >
          <div className="text-xs flex gap-3">
            <LoadingIcon />
            Payment loading
          </div>
          <span className="text-sm text-black font-medium">{time}</span>
        </div>
        <div className="w-full px-5 h-full flex gap-5 flex-col">
          <div>
            <div style={{ fontSize: "14px" }}>{title}</div>
            <strong>{amount} TNB</strong>
          </div>

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
