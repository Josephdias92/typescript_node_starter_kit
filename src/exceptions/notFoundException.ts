import HttpStatusCode from "../constants/HttpStatusCode";
import ErrorResponseData from "../model/errorResponseData";
import Exception from "./exception";
import { ExceptionType } from "./exceptionType";

export default class NotFoundException extends Exception {
    constructor(message: string, errorCode?) {
        const errorObject = new ErrorResponseData(message, errorCode);
        super(errorObject, HttpStatusCode.NOT_FOUND, ExceptionType.RESOURCE_NOT_FOUND);
    }
}
