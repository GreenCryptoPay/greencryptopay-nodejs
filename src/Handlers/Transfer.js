'use strict';

import {Request} from "../Request.js";

export class Transfer
{
    static apiUrl = 'https://api.greencryptopay.com/transfer/v1/';

    #request;
    #merchantId;

    /**
     * @param request
     */
    constructor(request)
    {
        if (!(request instanceof Request)) {
            throw new TypeError("The 'request' argument must be an instance of Request");
        }

        this.#request = request;
    }

    /**
     * @param merchantId
     */
    setMerchantId(merchantId)
    {
        if (typeof(merchantId) !== "string") {
            throw new TypeError("Invalid argument 'merchantId' must be a string");
        }

        this.#merchantId = merchantId;
    }

    /**
     * @returns {*}
     */
    merchant()
    {
        return this.#request.get('merchant');
    }

    /**
     * @param currency
     * @param recipientAddress
     * @param feeType
     * @param callbackUrl
     * @param orderId
     * @param currencyFrom
     * @param amountFrom
     * @returns {*}
     */
    paymentAddress(
        currency,
        recipientAddress,
        feeType,
        callbackUrl,
        orderId,
        currencyFrom,
        amountFrom
    )
    {
        if (typeof(currency) !== "string") {
            throw new TypeError("Invalid argument 'currency' must be a string");
        }

        if (typeof(recipientAddress) !== "string") {
            throw new TypeError("Invalid argument 'recipientAddress' must be a string");
        }

        if (typeof(feeType) !== "string") {
            throw new TypeError("Invalid argument 'feeType' must be a string");
        }

        if (typeof(callbackUrl) !== "string") {
            throw new TypeError("Invalid argument 'callbackUrl' must be a string");
        }

        if (typeof(orderId) !== "string") {
            throw new TypeError("Invalid argument 'orderId' must be a string");
        }

        if (typeof(currencyFrom) !== "string") {
            throw new TypeError("Invalid argument 'currencyFrom' must be a string");
        }

        if (typeof(amountFrom) !== "string") {
            throw new TypeError("Invalid argument 'amountFrom' must be a string");
        }


        return this.#request.post('payment_address', {
            "currency": currency,
            "recipient_address": recipientAddress,
            "fee_type": feeType,
            "callback_url": callbackUrl,
            "merchant_id": this.#merchantId,
            "order_id": orderId,
            "currency_from": currencyFrom,
            "amount_from": amountFrom
        });
    }

    /**
     * @param currency
     * @param paymentAddress
     * @returns {*}
     */
    paymentAddressState(currency, paymentAddress)
    {
        if (typeof(currency) !== "string") {
            throw new TypeError("Invalid argument 'currency' must be a string");
        }

        if (typeof(paymentAddress) !== "string") {
            throw new TypeError("Invalid argument 'paymentAddress' must be a string");
        }

        return this.#request.get('payment_address/state', {
            "currency": currency,
            "payment_address": paymentAddress
        });
    }

    /**
     *
     * @param currency
     * @param paymentAddress
     * @param txid
     * @param fromTimestamp
     * @param toTimestamp
     * @param limit
     * @param page
     * @param order
     * @returns {*}
     */
    paymentAddressPayments(
        currency,
        paymentAddress,
        txid,
        fromTimestamp,
        toTimestamp,
        limit,
        page,
        order
    )
    {
        if (typeof(currency) !== "string") {
            throw new TypeError("Invalid argument 'currency' must be a string");
        }

        if (typeof(paymentAddress) !== "string") {
            throw new TypeError("Invalid argument 'paymentAddress' must be a string");
        }

        let params = {
            "currency": currency,
            "payment_address": paymentAddress
        };

        if (txid !== undefined && txid !== null) {
            params['txid'] = txid;
        }

        if (fromTimestamp !== undefined && fromTimestamp !== null) {
            params['from_timestamp'] = fromTimestamp;
        }

        if (toTimestamp !== undefined && toTimestamp !== null) {
            params['to_timestamp'] = toTimestamp;
        }

        if (limit !== undefined && limit !== null) {
            params['limit'] = limit;
        }

        if (page !== undefined && page !== null) {
            params['page'] = page;
        }

        if (order !== undefined && order !== null) {
            params['order'] = order;
        }

        return this.#request.get('payment_address/payments', params);
    }

    /**
     *
     * @param currency
     * @param paymentAddress
     * @param txid
     * @param fromTimestamp
     * @param toTimestamp
     * @param limit
     * @param page
     * @param order
     * @returns {*}
     */
    paymentAddressCallbacks(
        currency,
        paymentAddress,
        txid,
        fromTimestamp,
        toTimestamp,
        limit,
        page,
        order
    )
    {
        if (typeof(currency) !== "string") {
            throw new TypeError("Invalid argument 'currency' must be a string");
        }

        if (typeof(paymentAddress) !== "string") {
            throw new TypeError("Invalid argument 'paymentAddress' must be a string");
        }

        let params = {
            "currency": currency,
            "payment_address": paymentAddress
        };

        if (txid !== undefined && txid !== null) {
            params['txid'] = txid;
        }

        if (fromTimestamp !== undefined && fromTimestamp !== null) {
            params['from_timestamp'] = fromTimestamp;
        }

        if (toTimestamp !== undefined && toTimestamp !== null) {
            params['to_timestamp'] = toTimestamp;
        }

        if (limit !== undefined && limit !== null) {
            params['limit'] = limit;
        }

        if (page !== undefined && page !== null) {
            params['page'] = page;
        }

        if (order !== undefined && order !== null) {
            params['order'] = order;
        }

        return this.#request.get('payment_address/callbacks', params);
    }

    /**
     * @param currency
     * @returns {*}
     */
    merchantState(currency)
    {
        if (typeof(currency) !== "string") {
            throw new TypeError("Invalid argument 'currency' must be a string");
        }

        return this.#request.get('merchant/state', {
            "currency": currency,
            "merchant_id": this.#merchantId
        });
    }

    /**
     * @param currency
     * @param fromTimestamp
     * @param toTimestamp
     * @param limit
     * @param page
     * @param order
     * @returns {*}
     */
    merchantPaymentAddress(
        currency,
        fromTimestamp,
        toTimestamp,
        limit,
        page,
        order
    )
    {
        if (typeof(currency) !== "string") {
            throw new TypeError("Invalid argument 'currency' must be a string");
        }

        let params = {
            "currency": currency,
            "merchant_id": this.#merchantId
        };

        if (fromTimestamp !== undefined && fromTimestamp !== null) {
            params['from_timestamp'] = fromTimestamp;
        }

        if (toTimestamp !== undefined && toTimestamp !== null) {
            params['to_timestamp'] = toTimestamp;
        }

        if (limit !== undefined && limit !== null) {
            params['limit'] = limit;
        }

        if (page !== undefined && page !== null) {
            params['page'] = page;
        }

        if (order !== undefined && order !== null) {
            params['order'] = order;
        }

        return this.#request.get('merchant/payment_addresses', params);
    }

    /**
     *
     * @param currency
     * @param txid
     * @param fromTimestamp
     * @param toTimestamp
     * @param limit
     * @param page
     * @param order
     * @returns {*}
     */
    merchantPayments(
        currency,
        txid,
        fromTimestamp,
        toTimestamp,
        limit,
        page,
        order
    )
    {
        if (typeof(currency) !== "string") {
            throw new TypeError("Invalid argument 'currency' must be a string");
        }

        let params = {
            "currency": currency,
            "merchant_id": this.#merchantId
        };

        if (txid !== undefined && txid !== null) {
            params['txid'] = txid;
        }

        if (fromTimestamp !== undefined && fromTimestamp !== null) {
            params['from_timestamp'] = fromTimestamp;
        }

        if (toTimestamp !== undefined && toTimestamp !== null) {
            params['to_timestamp'] = toTimestamp;
        }

        if (limit !== undefined && limit !== null) {
            params['limit'] = limit;
        }

        if (page !== undefined && page !== null) {
            params['page'] = page;
        }

        if (order !== undefined && order !== null) {
            params['order'] = order;
        }

        return this.#request.get('merchant/payments', params);
    }

}