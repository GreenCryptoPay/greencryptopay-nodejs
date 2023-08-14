"use strict";

export class GcpSdkRequestException extends Error
{
    constructor(message, code)
    {
        super(message);
        this.code = code;
        this.name = "GcpSdkRequestException";
    }
}