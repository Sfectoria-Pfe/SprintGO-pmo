import { Router } from "express";
import { errorHandler } from "../error-handler";
import { createProject } from "../controllers/Projects";
import authMiddleware from "../middlewares/auth";
import projectManagerMiddleware from "../middlewares/projectManager";

const projectRoutes: Router = Router()

projectRoutes.post('/',[authMiddleware,projectManagerMiddleware], errorHandler(createProject))

export default projectRoutes