# KeysignPay

A react component for setting up a payment page for tnbc purchases.

## Usage

- Install npm package

```
    npm i keysign-pay-react
```

- Add to your App

```ts
import React, { useState } from 'react';
import './App.css';
import KeysignPay from 'keysign-pay-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <button
        className="primary-button w-60"
        onClick={() => setIsVisible(true)}
      >
        Purchase a new Macbook
      </button>

      <KeysignPay
        title="M1 Macbook"
        amount={75000}
        accountNumber={'0'.repeat(60).concat('dead')}
        memo={'Still in Development'}
        visible={isVisible}
        onPageClose={() => setIsVisible(false)}
        onSuccess={res => console.log('Successful Transaction', res)}
        onFailed={res => console.log('Transaction Failed', res)}
      />
    </div>
  );
}
```

## API

### KeysignPay

| Property      | Description                                                                             | Type                          | Default                  |
| ------------- | --------------------------------------------------------------------------------------- | ----------------------------- | ------------------------ |
| accountNumber | The account number receiving the tnbc when someone purchases                            | string                        |                          |
| amount        | The amount of the item in tnbc                                                          | number                        |                          |
| node          | The ip address or domain of the node you want to process the transaction                | string                        | https://bank.keysign.app |
| onFailed      | Specify a function that will be called when the transaction fails                       | (result: KeysignResult)=>void |                          |
| onPageClose   | Specify a function that will determine what happens when a user closes the payment page | ()=>void                      |                          |
| onSuccess     | Specify a function that will be called when the transaction is complete                 | (result: KeysignResult)=>void |                          |
| title         | The name of the product, subscription or service you are offering                       | string                        |                          |
| visible       | Displays the payment page                                                               | boolean                       | false                    |

### KeysignResult

| Property   | Description                                                                                     | Type          |
| ---------- | ----------------------------------------------------------------------------------------------- | ------------- |
| data       | The request data made to keysign's payment portal                                               | RequestData   |
| error      | Type of error                                                                                   | string        |
| message    | Keysign's portal message                                                                        | string        |
| result     | The [Block](https://developer.thenewboston.com/api/bank-api/blocks) from a complete transaction | Block \| null |  |
| request_id | Id of the request                                                                               | number        |
| success    | Returns true if the transactions was complete and false if it failed                            | boolean       |
