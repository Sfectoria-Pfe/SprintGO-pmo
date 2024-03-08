import {Request,Response, NextFunction} from 'express'
import { UnauthorizedException } from '../exceptions/unauthorized'
import { ErrorCodes } from '../exceptions/root'
import '../types/express'



const projectManagerMiddleware = async(req: Request, res: Response, next:NextFunction) => {
    const user = req.user 
    if(user?.role== 'PROJECTMANAGER'){
        next()
    }
    else {
        next(new UnauthorizedException('Unauthorized', ErrorCodes.UNAUTHORIZED))
    }

}
export default projectManagerMiddleware