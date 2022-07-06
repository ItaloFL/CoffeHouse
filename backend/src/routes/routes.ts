import { Router } from "express";
import { productsRouter } from "./products.routes";
import { userRouter } from "./users.routes";


export const routes = Router()

routes.use(productsRouter)
routes.use(userRouter)