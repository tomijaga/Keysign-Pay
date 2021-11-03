import { FC, useState } from "react";
import { ReactComponent as ScanIcon } from "./icons/scan.svg";
import { ReactComponent as CopyIcon } from "./icons/copy.svg";
import { ReactComponent as KeysignLogo } from "./icons/logo.svg";
import { ReactComponent as LoadingIcon } from "./icons/loading.svg";

const KeysignPay: FC<Partial<{ title: string; amount: number }>> = ({
  title = "Chess registration fee",
  amount = 6000,
}) => {
  const [time, setTime] = useState("19:57");
  const [showQrCode, setShowQrCode] = useState(true);

  console.log({ title });
  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      className="mask h-screen w-screen flex
       items-center justify-center  absolute top-0 "
    >
      <div
        className="bg-white border-gray-300 border gap-3 py-12 
        justify-items-center items-center grid"
        style={{
          maxHeight: "900px",
          width: "375px",
          gridTemplateRows: "40px 30px auto",
        }}
      >
        <KeysignLogo />
        <div
          className="px-5 py-1 w-full flex justify-between items-center"
          style={{
            backgroundColor: "rgba(21, 101, 216, 0.1)",
          }}
        >
          <div className="text-xs flex gap-3 text-gray-500 font-medium">
            <LoadingIcon className="loading" />
            Payment Loading...
          </div>
          <span className="text-sm text-black font-medium">{time}</span>
        </div>

        <div className="w-full px-5 h-full flex gap-5 flex-col items-center">
          <div>
            <div style={{ fontSize: "14px" }}>{title}</div>
            <strong>{amount.toLocaleString()} TNB</strong>
          </div>

          <div
            className="grid grid-cols-2 rounded-3xl w-full"
            style={{
              backgroundColor: "rgba(21, 101, 216, 0.5)",
              padding: "5px",
              borderRadius: "20px",
            }}
          >
            <button
              className={`${showQrCode ? "app-button" : "secondary-button"}`}
              onClick={() => setShowQrCode(true)}
            >
              <ScanIcon fill="white" />
              Scan
            </button>
            <button
              className={`${!showQrCode ? "app-button" : "secondary-button"}`}
              onClick={() => setShowQrCode(false)}
            >
              <CopyIcon />
              Copy
            </button>
          </div>

          {showQrCode ? (
            <div
              className="w-72 h-72 rounded-2xl"
              style={{
                backgroundColor: "rgba(21, 101, 216, 0.1)",
              }}
            ></div>
          ) : (
            <div
              className="h-72 w-full rounded-2xl "
              style={{
                backgroundColor: "rgba(21, 101, 216, 0.1)",
              }}
            ></div>
          )}

          <div className="flex flex-col w-full gap-1">
            <button className="app-button">Pay with browser</button>
            <span>or</span>
            <button disabled className="app-button">
              Pay with desktop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeysignPay;
