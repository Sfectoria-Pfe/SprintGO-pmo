import { Request, Response } from "express";
import { prismaClient } from "..";

export const createProject = async (req:Request, res:Response) => {


    const project = await prismaClient.project.create( {
        data: {
           ...req.body
            
        }
    })
    res.json(project)
}