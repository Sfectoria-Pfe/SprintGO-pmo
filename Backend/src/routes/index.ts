import { Router } from "express";
import authRoutes from "./auth";
import projectRoutes from "./projects";

const rootRouter: Router = Router()

rootRouter.use('/auth', authRoutes)
rootRouter.use('/projects', projectRoutes)

export default rootRouter;