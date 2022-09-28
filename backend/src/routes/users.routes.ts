import { Router } from 'express'
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController'
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController'
import multer from 'multer'
import configMulter from '../config/multer'


export const userRouter = Router()

const upload = multer(configMulter)

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

userRouter.post('/user', upload.single('image'), createUserController.handle)
userRouter.post('/login', authenticateUserController.handle)
