import express, {Express, Request, Response} from 'express'
import { PORT } from './secrets'
import rootRouter from './routes'
import { PrismaClient } from '@prisma/client';
import { errorMiddleware } from './middlewares/errors';
import { SignUpSchema } from './schema/users';
import cors  from 'cors' //ES6


const app:Express = express()
app.use(cors())

app.use(express.json())
app.use('/api', rootRouter);

export const prismaClient = new PrismaClient({
    log: ['query']
})
app.use(errorMiddleware)

app.listen(PORT, ()=>{console.log('App Working!')})   

