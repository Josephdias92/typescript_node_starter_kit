import HttpStatusCode from "../constants/HttpStatusCode";
import ErrorResponseData from "../model/errorResponseData";
import Exception from "./exception";
import { ExceptionType } from "./exceptionType";

export default class BadRequestException extends Exception {
    constructor(message: string, errorCode?) {
        const errorObject = new ErrorResponseData(message, errorCode);
        super(errorObject, HttpStatusCode.BAD_REQUEST, ExceptionType.BAD_REQUEST);
    }
}
