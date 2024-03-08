import {Request,Response, NextFunction} from 'express'
import { UnauthorizedException } from '../exceptions/unauthorized'
import { ErrorCodes } from '../exceptions/root'
import * as jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../secrets'
import { prismaClient } from '..'
import '../types/express'



const authMiddleware = async(req: Request, res: Response, next:NextFunction) => {
//Extract the token from header
const token =req.headers.authorization as string
//if token is not present throw error 
if (!token){
    next(new UnauthorizedException('Unauthorized', ErrorCodes.UNAUTHORIZED))
}
try {
    //if token exist ,extract the payload 
const payload= jwt.verify(token, JWT_SECRET) as any
//get user from payload
const user = await prismaClient.user.findFirst({where: {id: payload.userId}})
if(!user){
    next(new UnauthorizedException('Unauthorized', ErrorCodes.UNAUTHORIZED))
}
// attach the user to the current request object
req.user= user
next()
}
catch(error){
    next(new UnauthorizedException('Unauthorized', ErrorCodes.UNAUTHORIZED))
}


}
export default authMiddleware