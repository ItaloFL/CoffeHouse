import { Router } from "express";
import { depoimentsRoutes } from "./depoiments.routes";
import { productsRouter } from "./products.routes";
import { userRouter } from "./users.routes";


export const routes = Router()

routes.use(productsRouter)
routes.use(userRouter)
routes.use(depoimentsRoutes)