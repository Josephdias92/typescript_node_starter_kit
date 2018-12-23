import HttpStatusCode from "../constants/HttpStatusCode";
import ErrorResponseData from "../model/errorResponseData";
import { ExceptionType } from "./exceptionType";

export default class Exception extends Error {
    private errorMessage: ErrorResponseData;
    private exceptionType: ExceptionType;
    private statusCode: HttpStatusCode;
    constructor(errorMessage: ErrorResponseData, statusCode: HttpStatusCode, exceptionType: ExceptionType) {
        super(errorMessage.errorMsg);
        this.errorMessage = errorMessage;
        this.exceptionType = exceptionType;
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, Exception.prototype);
    }
}
