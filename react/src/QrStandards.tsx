import React, { FC } from 'react';
import { Qr } from './Qr';
import { Transaction } from './types';

export const TransferQr: FC<{ className?: string; tx: Transaction }> = ({
  tx,
  className,
}) => {
  return <Qr className={className} text={JSON.stringify(tx)} />;
};

export interface SyncAccount {
  [x: string]: string;
}

export const SyncAccountsQR: FC<{
  className?: string;
  accounts: SyncAccount | SyncAccount[];
}> = ({ accounts, className }) => {
  return <Qr className={className} text={JSON.stringify(accounts)} />;
};
