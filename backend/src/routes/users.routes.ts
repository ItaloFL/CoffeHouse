import { Router } from 'express'
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController'
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController'

export const userRouter = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

userRouter.post('/user', createUserController.handle)
userRouter.post('/login', authenticateUserController.handle)
