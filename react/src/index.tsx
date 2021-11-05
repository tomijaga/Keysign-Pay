import React, { useState } from 'react';
import KeysignLogo from './icons/KeysignLogo';
import LoadingIcon from './icons/LoadingIcon';
import './style.css';

import ScanIcon from './icons/ScanIcon';
import CopyIcon from './icons/CopyIcon';
import CloseIcon from './icons/CloseIcon';

import CopyTab from './tabs/CopyTab';
import ScanTab from './tabs/ScanTab';
import { KeysignPayProps } from './props';
import { KeysignPayContext } from './context';
import { getTime } from './utils';

enum Tab {
  scan,
  copy,
}

export const KeysignPay: React.FC<KeysignPayProps> = ({
  amount,
  accountNumber,
  memo = '',
  node = 'https://bank.keysign.app',
  title,
  visible = false,
  onSuccess,
  onFailed,
  onPageClose,
}) => {
  const [tab, setTab] = useState<Tab>(Tab.scan);

  return (
    <KeysignPayContext.Provider
      value={{
        amount,
        accountNumber,
        memo,
        node,
        title,
        visible,
        onSuccess,
        onFailed,
        onPageClose,
      }}
    >
      <div
        style={{
          display: visible ? '' : 'none',
        }}
        className="App mask h-screen w-screen flex 
         absolute top-0 overflow-y-auto"
        onClick={e => {
          if ((e.target as any).classList.contains('mask')) {
            onPageClose?.();
          }
        }}
      >
        <div
          className="bg-white border-gray-300 border gap-3 py-12 m-auto
        justify-items-center items-center grid auto-rows-auto relative"
          style={{
            maxHeight: '900px',
            width: '375px',
          }}
        >
          <div>
            <div
              className="absolute right-4 top-4 cursor-pointer text-gray-400 hover:text-gray-700"
              onClick={() => {
                onPageClose?.();
              }}
            >
              <CloseIcon />
            </div>
            <KeysignLogo />
          </div>

          <div
            className="px-5 py-1 w-full flex justify-between items-center"
            style={{
              backgroundColor: 'rgba(21, 101, 216, 0.1)',
            }}
          >
            <div className="text-xs flex gap-3 text-gray-500 font-medium">
              <LoadingIcon className="loading " />
              Payment Loading...
            </div>
            <span className="text-sm text-black font-medium">{getTime()}</span>
          </div>

          <div className="w-full px-5 h-full flex gap-5 flex-col items-center">
            <div>
              <div style={{ fontSize: '14px' }}>{title}</div>
              <strong>{amount.toLocaleString()} TNB</strong>
            </div>

            <div
              className="grid grid-cols-2 rounded-3xl w-full"
              style={{
                backgroundColor: 'rgba(21, 101, 216, 0.5)',
                padding: '5px',
                borderRadius: '20px',
              }}
            >
              <button
                className={
                  tab === Tab.scan ? 'primary-button' : 'secondary-button'
                }
                onClick={() => setTab(Tab.scan)}
              >
                <ScanIcon />
                Scan
              </button>
              <button
                className={`${
                  tab === Tab.copy ? 'primary-button' : 'secondary-button'
                }`}
                onClick={() => setTab(Tab.copy)}
              >
                <CopyIcon />
                Copy
              </button>
            </div>

            {tab === Tab.scan ? <ScanTab /> : <CopyTab />}
          </div>
        </div>
      </div>
    </KeysignPayContext.Provider>
  );
};
