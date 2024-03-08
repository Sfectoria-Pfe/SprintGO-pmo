import { ErrorCodes, HttpException } from "./root";

export class BadRequestsException extends HttpException{
    constructor (message: string, erroCode: ErrorCodes){
        super(message, erroCode, 400, null);
    }
}