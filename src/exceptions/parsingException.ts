import HttpStatusCode from "../constants/HttpStatusCode";
import ErrorResponseData from "../model/errorResponseData";
import Exception from "./exception";
import { ExceptionType } from "./exceptionType";

export default class ParsingException extends Exception {
    constructor(message: string, errorCode?: string) {
        const errorObject = new ErrorResponseData(message, errorCode);
        super(errorObject, HttpStatusCode.INTERNAL_SERVER_ERROR, ExceptionType.PARSING_ERROR);
    }
}
