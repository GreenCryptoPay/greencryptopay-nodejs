# Greencryptopay library for Node.js

The Greencryptopay library for Node.js allows you to easily integrate the Greencryptopay payment system into your Node.js projects. This library provides convenient methods for interacting with the Greencryptopay API.

## Installation

You can install this package using npm:

```sh
npm install greencryptopay-nodejs --save
```

## Dependencies 
This package depends on the "node-fetch" library version ^2.6. If it's not already installed, it will be automatically installed when you install this library.

## Standard API
- [Standard API](https://greencryptopay.com/ru/standard)

> **Getting Started:**

```javascript
import Api from 'greencryptopay-nodejs';

(async () => {
    
    // Standard API
    const standardApi = Api.make('standard');
    
    // Standard API testnet
    const standardApi = Api.make('standard', true);

    // Sign up
    if (!merchantId || !secretKey) {
        const data = await standardApi.merchant('percent', 'https://example.com/callback');
        merchantId = data['merchant_id'];
        secretKey = data['secret_key'];
    }

    standardApi.setMerchantId(merchantId);
    standardApi.setSecretKey(secretKey);
    
})()
```

> **Sign up:**

| Name    | Parameters | Validation | Description |
| :----  | :----  |  :----  |:---- |
| merchant | <ul><li>string feeType</li><li>string callbackUrl</li></ul>| <ul><li>Enum: [percent, fix]</li><li>Max: 200</li></ul> | <ul><li>Fee type</li><li>URL to send notifications about payments</li></ul>  |


> **Operations:**

| Name    | Parameters | Validation | Description |
| :----  | :----  |  :----  |:---- |
| paymentAddress | <ul><li>string currency</li><li>string callbackUrl</li> <li>string orderId</li> <li>string currencyFrom</li> <li>string amountFrom</li></ul> | <ul><li>Enum: [btc]</li><li>Max: 200</li> <li>Max: 50</li> <li>Enum: [usd]</li> <li> — </li></ul> | <ul><li>Currency</li><li>URL to send notifications about payments</li> <li>Order identifier in your system</li> <li>Currency to convert from</li> <li>Amount to convert</li></ul> |
| withdraw | <ul><li> string currency </li><li> array recipients </li></ul>| <ul><li> Enum: [btc] </li><li> — </li></ul> | <ul><li> Currency </li><li>Array structure:  [['address' => 'Recipient address', 'amount' => 'Recipient's amount']] </li></ul>  |
| withdrawAll | <ul><li> string currency </li><li> string recipientAddress </li></ul>| <ul><li> Enum: [btc] </li><li> — </li></ul> | <ul><li> Currency </li><li> Recipient address </li></ul>  |

> **Stats:**

| Name    | Parameters | Validation | Description |
| :----  | :----  |  :----  |:---- |
| merchantState | <ul><li> string currency </li></ul>| <ul><li> Enum: [btc] </li></ul> | <ul><li> Currency </li></ul>  |
| merchantPaymentAddress | <ul><li> string currency </li><li> string / null fromTimestamp </li><li> string / null toTimestamp </li><li> int / null limit </li><li> int / null page </li><li>string / null order</li></ul>| <ul><li> Enum: [btc] </li><li> Timestamp in UTC </li><li> Timestamp in UTC </li><li> Min:1, Max:200 </li><li>Min:1 </li><li> Enum: [asc, desc] </li></ul> | <ul><li> Currency </li><li> Address creation timestamp in UTC, from (inclusive, ex. "2035-12-31T15:30:59")</li><li>Address creation timestamp in UTC, to (inclusive, ex. "2035-12-31T15:30:59") </li><li> Number of records in the response </li><li> Page number </li><li> Records order ascending or descending </li></ul>  |
| merchantIncomingPayments | <ul><li> string currency </li><li> string / null paymentAddress </li><li> string / null txid </li><li> string / null fromTimestamp </li><li> string / null toTimestamp </li><li> int / null limit </li><li> int / null page </li><li> string / null order </li></ul>| <ul><li> Enum: [btc] </li><li> — </li><li> — </li><li> Timestamp in UTC </li><li> Timestamp in UTC </li><li> Min:1, Max:200 </li><li> Min:1 </li><li> Enum: [asc, desc] </li></ul> | <ul><li> Currency </li><li> Show only payments to specific payment address </li><li> Show only payments with specific transaction </li><li> Payment timestamp in UTC, from (inclusive, ex. "2035-12-31T15:30:59") </li><li> Payment timestamp in UTC, to (inclusive, ex. "2035-12-31T15:30:59") </li><li> Number of records in the response </li><li> Page number </li><li> Records order ascending or descending </li></ul>  |
| merchantWithdrawals | <ul><li> string currency </li><li> string / null fromTimestamp </li><li> string / null toTimestamp </li><li> int / null limit </li><li> int / null page </li><li> string / null order </li></ul>| <ul><li>Enum: [btc] </li><li> Timestamp in UTC </li><li> Timestamp in UTC </li><li> Min:1, Max:200 </li><li> Min:1 </li><li> Enum: [asc, desc] </li></ul> | <ul><li> Currency</li><li>Withdrawal timestamp in UTC, from (inclusive, ex. "2035-12-31T15:30:59") </li><li> Withdrawal timestamp in UTC, to (inclusive, ex. "2035-12-31T15:30:59") </li><li> Number of records in the response </li><li> Page number </li><li> Records order ascending or descending </li></ul>  |
| paymentAddressCallbacks  | <ul><li> string currency </li><li> string paymentAddress </li><li> string / null txid </li><li> string / null fromTimestamp </li><li> string / null toTimestamp </li><li> int  / null limit </li><li> int  / null page </li><li> string / null order </li></ul>| <ul><li>Enum: [btc] </li><li> — </li><li> — </li><li> Timestamp in UTC </li><li> Timestamp in UTC </li><li> Min:1, Max:200 </li><li> Min:1 </li><li> Enum: [asc, desc] </li></ul> | <ul><li> Currency </li><li> Payment address </li><li> Show only payment callbacks with specific transaction </li><li> Callback timestamp in UTC, from (inclusive, ex. "2035-12-31T15:30:59") </li><li> Callback timestamp in UTC, to (inclusive, ex. "2035-12-31T15:30:59") </li><li> Number of records in the response </li><li> Page number </li><li> Records order ascending or descending </li></ul>  |
| paymentAddressState | <ul><li> string currency </li><li> string paymentAddress </li></ul>| <ul><li> Enum: [btc] </li><li> — </li></ul> | <ul><li> Currency </li><li> Payment address </li></ul>  |

## Transfer API

- [Transfer API](https://greencryptopay.com/ru/transfer)

> **Getting Started:**

```javascript
import Api from 'greencryptopay-nodejs';

(async () => {
    
    // Transfer API
    const transferApi = Api.make('transfer');

    // Transfer API testnet
    const transferApi = Api.make('transfer', true);

    // Sign up
    if (!merchantId || !secretKey) {    
        const data = await transferApi.merchant('percent', 'https://example.com/callback');
        merchantId = data['merchant_id'];
        secretKey = data['secret_key'];
    }

    transferApi.setMerchantId(merchantId);
    transferApi.setSecretKey(secretKey);
    
})()
```

> **Sign up:**

| Name    | Parameters | Validation | Description |
| :----  | :----  |  :----  |:---- |
| merchant | <ul><li>string feeType</li><li>string callbackUrl</li></ul>| <ul><li>Enum: [percent, fix]</li><li>Max: 200</li></ul> | <ul><li>Fee type</li><li>URL to send notifications about payments</li></ul>  |


> **Operations:**

| Name    | Parameters | Validation | Description |
| :----  | :----  |  :----  |:---- |
| paymentAddress | <ul><li> string currency </li><li> string recipientAddress </li><li> string feeType </li><li> string callbackUrl </li><li> string orderId </li><li> string currencyFrom </li><li> string amountFrom </li></ul>| <ul><li>Enum: [btc] </li><li> — </li><li>Enum: [percent, fix] </li><li> Max:200 </li><li> Max:50 </li><li> Enum: [usd, rub, try, eur, zar, gbp, uah, aud, brl, pln] </li><li> — </li></ul> | <ul><li> Currency </li><li> Recipient address </li><li> Fee type </li><li> URL to send notifications about payments </li><li> Order identifier in your system </li><li> Currency to convert from </li><li> Amount to convert </li></ul>  |

> **Stats:**

| Name    | Parameters | Validation | Description |
| :----  | :----  |  :----  |:---- |
| paymentAddressState | <ul><li> string currency </li><li> string paymentAddress </li></ul>| <ul><li> Enum: [btc] </li><li> — </li></ul> | <ul><li> Currency </li><li> Show only payments to specific payment address </li></ul>  |
| paymentAddressPayments  | <ul><li> string currency </li><li> string paymentAddress </li><li> string / null txid </li><li> string / null fromTimestamp </li><li> string / null toTimestamp </li><li> int  / null limit </li><li> int  / null page </li><li> string / null order </li></ul>| <ul><li> Enum: [btc]  </li><li> — </li><li> — </li><li> Timestamp in UTC </li><li> Timestamp in UTC </li><li> Min:1, Max:200 </li><li> Min:1 </li><li> Enum: [asc, desc] </li></ul> | <ul><li> Currency </li><li> Payment address </li><li> Show only specific transaction payments </li><li> Payment timestamp in UTC, from (inclusive, ex. "2035-12-31T15:30:59") </li><li> Payment timestamp in UTC, to (inclusive, ex. "2035-12-31T15:30:59") </li><li> Number of records in the response </li><li> Page number </li><li> Records order ascending or descending </li></ul>  |
| paymentAddressCallbacks  | <ul><li> string currency </li><li> string paymentAddress </li><li> string / null txid </li><li> string / null fromTimestamp </li><li> string / null toTimestamp </li><li> int  / null limit </li><li> int  / null page </li><li> string / null order </li></ul>| <ul><li>Enum: [btc] </li><li> — </li><li> — </li><li> Timestamp in UTC </li><li> Timestamp in UTC </li><li> Min:1, Max:200 </li><li> Min:1 </li><li> Enum: [asc, desc] </li></ul> | <ul><li> Currency </li><li> Payment address </li><li> Show only payment callbacks with specific transaction </li><li> Payment timestamp in UTC, from (inclusive, ex. "2035-12-31T15:30:59") </li><li> Payment timestamp in UTC, to (inclusive, ex. "2035-12-31T15:30:59") </li><li> Number of records in the response </li><li> Page number </li><li> Records order ascending or descending </li></ul>  |
| merchantState | <ul><li> string currency </li></ul>| <ul><li> Enum: [btc] </li></ul> | <ul><li> Currency </li></ul>  |
| merchantPaymentAddress | <ul><li> string currency </li><li> string / null fromTimestamp </li><li> string / null toTimestamp </li><li> int / null limit </li><li> int / null page </li><li>string / null order</li></ul>| <ul><li> Enum: [btc] </li><li> Timestamp in UTC </li><li> Timestamp in UTC </li><li> Min:1, Max:200 </li><li>Min:1 </li><li> Enum: [asc, desc] </li></ul> | <ul><li> Currency </li><li> Address creation timestamp in UTC, from (inclusive, ex. "2035-12-31T15:30:59")</li><li>Address creation timestamp in UTC, to (inclusive, ex. "2035-12-31T15:30:59") </li><li> Number of records in the response </li><li> Page number </li><li> Records order ascending or descending </li></ul>  |
| merchantPayments | <ul><li> string currency </li><li> string / null txid  </li><li> string / null fromTimestamp </li><li> string / null toTimestamp </li><li> int  / null limit </li><li> int  / null page </li><li> string / null order </li></ul> | <ul><li> Enum: [btc] </li><li> — </li><li> Timestamp in UTC </li><li> Timestamp in UTC </li><li> Min:1, Max:200 </li><li> Min:1 </li><li> Enum: [asc, desc] </li></ul> | <ul><li> Currency </li><li> Show only specific transaction payments </li><li> Payment timestamp in UTC, from (inclusive, ex. "2035-12-31T15:30:59") </li><li> Payment timestamp in UTC, to (inclusive, ex. "2035-12-31T15:30:59")  </li><li> Number of records in the response  </li><li> Page number  </li><li> Records order ascending or descending </li></ul>  |


