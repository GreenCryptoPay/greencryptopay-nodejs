"use strict";

export class GcpSdkApiException extends Error
{
    constructor(message, code)
    {
        super(message);
        this.code = code;
        this.name = "GcpSdkApiException";
    }
}