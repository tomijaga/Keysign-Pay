import React, { useContext } from 'react';
import { KeysignPayContext } from '../context';

const CopyTab = () => {
  const { accountNumber, amount, memo } = useContext(KeysignPayContext);

  return (
    <>
      <p className="text-sm w-4/5 py-2">
        Please send {amount.toLocaleString()} TNBC to the address below to
        complete your transaction.
      </p>
      <div className="h-72 w-full rounded-2xl flex flex-col gap-3 area-bg-lightblue">
        <div className="w-full flex flex-col gap-6 p-8">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-400">Amount</span>
            <strong className="text-2xl">{amount.toLocaleString()} TNB</strong>
          </div>
          <div className="flex flex-col gap-2 ">
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
              value={memo}
              disabled
            />
          </div>{' '}
        </div>
      </div>
    </>
  );
};

export default React.memo(CopyTab);
