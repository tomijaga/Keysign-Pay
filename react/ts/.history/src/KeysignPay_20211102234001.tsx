import { FC, useEffect, useState } from "react";
import { ReactComponent as ScanIcon } from "./icons/scan.svg";
import { ReactComponent as CopyIcon } from "./icons/copy.svg";
import { ReactComponent as KeysignLogo } from "./icons/logo.svg";
import { ReactComponent as LoadingIcon } from "./icons/loading.svg";

const KeysignPay: FC<
  Partial<{
    title: string;
    amount: number;
    accountNumber: string;
    visible: boolean;
    onSuccess?: (result: any) => void;
    onFailed?: (result: any) => void;
  }>
> = ({
  title = "Chess registration fee",
  amount = 6000,
  visible = true,
  accountNumber = "1c84c8de6c41510150aa5d88df69bb323f7c8bec70578d6d6f78296418af7c7d",
  onSuccess = (res) => console.log(res),
}) => {
  const [time, setTime] = useState("19:57");
  const [useKeysign, setUseKeysign] = useState(true);

  const [keysign, setKeysign] = useState<any>(null);
  const [lookingForKeysign, setLookingForKeysign] = useState(true);

  const waitForKeysign = () => {
    let keysignObj: any;
    let iterations = 0;
    console.time("waitForKeysign");
    const interval = setInterval(() => {
      iterations += 1;
      keysignObj = (window as any).tnb_keysign;
      if (keysignObj || iterations >= 3) {
        setKeysign(keysignObj);
        setLookingForKeysign(false);

        clearInterval(interval);
        console.timeEnd("waitForKeysign");
      }
    }, 1000);
  };

  console.log({ lookingForKeysign });
  useEffect(() => {
    waitForKeysign();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        display: visible ? "" : "none",
      }}
      className="mask h-screen w-screen flex
       items-center justify-center  absolute top-0 overflow-y-auto"
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
              className={`${useKeysign ? "app-button" : "secondary-button"}`}
              onClick={() => setUseKeysign(true)}
            >
              <ScanIcon className="fill-current" fill="white" />
              Scan
            </button>
            <button
              className={`${!useKeysign ? "app-button" : "secondary-button"}`}
              onClick={() => setUseKeysign(false)}
            >
              <CopyIcon className="text-white" />
              Copy
            </button>
          </div>

          {useKeysign ? (
            <div
              className="w-72 h-72 rounded-2xl"
              style={{
                backgroundColor: "rgba(21, 101, 216, 0.1)",
              }}
            ></div>
          ) : (
            <>
              <p className="text-sm w-4/5 py-2">
                Please send {amount} TNBC to the address below to complete your
                transaction.
              </p>
              <div
                className="h-72 w-full rounded-2xl flex flex-col gap-3"
                style={{
                  backgroundColor: "rgba(21, 101, 216, 0.1)",
                }}
              >
                <div className="w-full flex flex-col gap-6 p-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-400">Amount</span>
                    <strong className="text-2xl">
                      {amount.toLocaleString()} TNB
                    </strong>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-400">Address</span>
                    <input
                      className="text-input-display "
                      type="text"
                      value={accountNumber}
                      disabled
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-400">Memo</span>
                    <input
                      className="text-input-display"
                      type="text"
                      disabled
                    />
                  </div>{" "}
                </div>
              </div>
            </>
          )}

          {useKeysign && (
            <div className="flex flex-col w-full gap-1">
              <button
                disabled={lookingForKeysign}
                className={`${
                  !lookingForKeysign ? "app-button" : "disabled-button"
                }`}
                onClick={() => {
                  if (!keysign) {
                    if (
                      window.confirm(
                        "Keysign is not installed on your browser. Click Ok to download Keysign from the chrome web store"
                      )
                    )
                      window.open(
                        "https://chrome.google.com/webstore/detail/keysign/icgabofdocpmhlcamjijifghkijnccbo",
                        "_blank"
                      );
                  } else {
                    console.log("enters");
                    keysign.requestHandshake((res: any) => {
                      console.log(res);
                      console.log("Keysign is installed!");
                    });

                    keysign.requestTransfer(
                      { to: accountNumber, amount, memo: "hi" },
                      (res: any) => onSuccess(res),
                      "https://bank.keysign.app"
                    );
                  }
                }}
              >
                {!keysign && (
                  <LoadingIcon className="loading" style={{ color: "white" }} />
                )}
                Pay with browser
              </button>
              <span>or</span>
              <button disabled className="app-button">
                Pay with desktop
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KeysignPay;
