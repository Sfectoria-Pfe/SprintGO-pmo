import { ErrorCodes, HttpException } from "./root";

export class NotFoundException extends HttpException{
    constructor (message: string, erroCode: ErrorCodes){
        super(message, erroCode, 404, null);
    }
}