import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Input } from './Input';
import { KeysignPay } from '../dist';
import { useState } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [accountNumber, setAccountNumber] = useState(
    '0'.repeat(60).concat('dead')
  );
  const [memo, setMemo] = useState('Unique Memo');
  const [amount, setAmount] = useState(54300);
  const [purchaseItem, setPurchaseItem] = useState('M1 Macbook');

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-3 p-10 w-96">
        <Input
          key="editor1"
          name="Title"
          value={purchaseItem}
          setValue={value => setPurchaseItem(value)}
        />
        <Input
          name="Account Number"
          value={accountNumber}
          setValue={value => setAccountNumber(value)}
        />
        <Input
          name="Amount"
          value={amount}
          setValue={value => setAmount(Number(value))}
        />
        <Input name="Memo" value={memo} setValue={value => setMemo(value)} />
      </div>

      <button
        className="primary-button w-60"
        onClick={() => setIsVisible(true)}
      >
        Purchase an Item
      </button>

      <KeysignPay
        title={purchaseItem}
        amount={amount}
        accountNumber={accountNumber}
        memo={memo}
        visible={isVisible}
        onPageClose={() => setIsVisible(false)}
        onSuccess={res => console.log('Successful Transaction', res)}
        onFailed={res => console.log('Transaction Failed', res)}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
