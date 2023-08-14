'use strict';

import fetch from 'node-fetch';
import {GcpSdkRequestException} from "./Exceptions/GcpSdkRequestException.js";

export class Request
{
    #apiUrl = null;

    #headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    constructor(apiUrl, testnet)
    {
        testnet = testnet ? 'testnet/' : null;
        this.#apiUrl = apiUrl + testnet;
    }

    /**
     * @param secretKey
     */
    setSecretKey(secretKey)
    {
        if (typeof(secretKey) !== "string") {
            throw new TypeError("Invalid argument 'secretKey' must be a string");
        }

        this.#headers['X-Secret-Key'] = secretKey;
    }

    /**
     * @param method
     * @param params
     * @param headers
     */
    async get(method, params, headers)
    {
        let url = this.#apiUrl + method;

        if (params !== undefined && Object.keys(params).length) {
            url += '?' + new URLSearchParams(params);
        }

        let _headers = this.#headers;

        if (headers !== undefined && typeof params === 'object') {
            _headers = {..._headers, ...headers};
        }

        const response = await fetch(url, {
            method: 'get',
            headers: _headers
        });

        if (!response.ok) {
            let error = await response.json();
            let message = error['error'] || response.statusText;
            throw new GcpSdkRequestException(message, response.status);
        }

        return response.json();
    }

    /**
     * @param method
     * @param params
     * @param headers
     * @returns {*}
     */
    async post(method, params, headers)
    {
        let _headers = this.#headers;

        if (headers !== undefined && typeof params === 'object') {
            _headers = {..._headers, ...headers};
        }

        const response =  await fetch(this.#apiUrl + method, {
            method: 'post',
            headers: _headers,
            body: JSON.stringify(params)
        });

        if (!response.ok) {
            let error = await response.json();
            let message = error['error'] || response.statusText;
            throw new GcpSdkRequestException(message, response.status);
        }

        return response.json();
    }
}