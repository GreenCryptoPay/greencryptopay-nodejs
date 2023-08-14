'use strict';

import {Standard} from "./Handlers/Standard.js";
import {Transfer} from "./Handlers/Transfer.js";
import {Request} from "./Request.js";
import {GcpSdkApiException} from "./Exceptions/GcpSdkApiException.js";

export default class Api
{
    static make(handler, testnet)
    {
        let request;

        switch (handler) {
            case 'standard':
                request = new Request(Standard.apiUrl, testnet)
                return new Standard(request);
            case 'transfer':
                request = new Request(Transfer.apiUrl, testnet)
                return new Transfer(request);
            default:
                throw new GcpSdkApiException("Handler " + handler + " not found.", 0);
        }
    };
}