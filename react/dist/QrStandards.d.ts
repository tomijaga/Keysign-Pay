import { FC } from 'react';
import { Transaction } from './types';
export declare const TransferQr: FC<{
    className?: string;
    tx: Transaction;
}>;
export interface SyncAccount {
    [x: string]: string;
}
export declare const SyncAccountsQR: FC<{
    className?: string;
    accounts: SyncAccount | SyncAccount[];
}>;
