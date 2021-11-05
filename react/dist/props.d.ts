import { KeysignResult, Transaction } from './types';
export declare type KeysignPayProps = {
    node?: string;
    title: string;
    visible: boolean;
    onSuccess?: (result: KeysignResult) => void;
    onFailed?: (result: KeysignResult) => void;
    onPageClose?: () => void;
} & Transaction;
