export interface Transaction {
    accountNumber: AccountNumber;
    amount: number;
    memo?: string;
}
declare type AccountNumber = string;
export interface KeysignResult {
    success: boolean;
    error: string;
    result: Block | null;
    data: RequestData;
    message: string;
    request_id: number;
}
export interface Block {
    balance_key: string;
    created_date: string;
    id: string;
    modified_date: string;
    sender: AccountNumber;
    signature: string;
}
export interface RequestData {
    request_id: number;
    type: 'transfer';
    txs: [{
        to: AccountNumber;
        amount: number;
        memo?: string;
    }];
    bank: string;
    code: string;
}
export {};
