import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

export const userRouter = Router()

const createUserController = new CreateUserController()

userRouter.post('/user', createUserController.handle)