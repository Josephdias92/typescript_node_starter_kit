import StatusData from "./statusData";

export default class ErrorResponseData extends StatusData {
    public errorCode: string;
    public errorMsg: string;
    constructor(errorMessage, errorCode = "") {
        super();
        this.errorCode = errorCode;
        this.errorMsg = errorMessage;
        this.result = "Error";
    }
}
