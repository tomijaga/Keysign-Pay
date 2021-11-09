import React, { useContext, useEffect, useState } from 'react';
import LoadingIcon from '../icons/LoadingIcon';

import { TransferQr } from '../QrStandards';
import { KeysignResult, Transaction } from '../types';
import { waitForKeysignToLoad } from '../utils';
import { KeysignPayContext } from '../context';

const ScanTab = () => {
  const [tx, setTx] = useState<Transaction>({} as Transaction);

  const [keysign, setKeysign] = useState<any>(null);
  const [lookingForKeysign, setLookingForKeysign] = useState(true);

  const { accountNumber, amount, memo, node, onSuccess, onFailed } = useContext(
    KeysignPayContext
  );

  useEffect(() => {
    setTx({ accountNumber, amount, memo });

    if ((window as any).tnb_keysign) {
      setKeysign((window as any).tnb_keysign);
      setLookingForKeysign(false);
    } else {
      waitForKeysignToLoad((keysignGlobalObj: any) => {
        setKeysign(keysignGlobalObj);
        setLookingForKeysign(false);
      });
    }
  }, [accountNumber, amount, memo]);

  return (
    <>
      <div className="w-72 h-72 rounded-2xl area-bg-lightblue">
        <TransferQr tx={tx} />
      </div>

      <div className="flex flex-col w-full gap-1">
        <button
          disabled={lookingForKeysign}
          className={`${
            !lookingForKeysign ? 'primary-button' : 'disabled-button'
          }`}
          onClick={() => {
            if (!keysign) {
              if (
                window.confirm(
                  'Keysign is not installed on your browser. Click Ok to download Keysign from the chrome web store'
                )
              )
                window.open(
                  'https://chrome.google.com/webstore/detail/keysign/icgabofdocpmhlcamjijifghkijnccbo',
                  '_blank'
                );
            } else {
              keysign.requestHandshake(() => {
                // console.log('Keysign is installed!');
                keysign.requestTransfer(
                  [tx].map(({ amount, accountNumber, memo }) => ({
                    to: accountNumber,
                    amount,
                    memo: memo,
                  })),
                  (res: KeysignResult) => {
                    if (res.success) {
                      onSuccess?.(res);
                    } else {
                      onFailed?.(res);
                    }
                  },
                  node,
                  'randomly generated code'
                );
              });
            }
          }}
        >
          {!keysign && <LoadingIcon className="loading " />}
          Pay with browser
        </button>
        <span>or</span>
        <button disabled className="primary-button cursor-auto">
          Pay with desktop
        </button>
      </div>
    </>
  );
};
export default React.memo(ScanTab);
