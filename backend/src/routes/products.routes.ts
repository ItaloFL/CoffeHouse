import { Router } from 'express'
import multer from 'multer'
import configMulter from '../config/multer'
import { ensureAuthenticateMiddleware } from '../middleware/ensureAuthenticateMiddleware'
import { CreateProductController } from '../modules/product/useCases/createProduct/CreateProductController'
import { EditProductController } from '../modules/product/useCases/editProduct/EditProductController'

export const productsRouter = Router()

const upload = multer(configMulter)

const createProductController = new CreateProductController()
const editProductController = new EditProductController()

productsRouter.post(
  '/products',
  upload.single('image'),
  ensureAuthenticateMiddleware,
  createProductController.handle
)
productsRouter.put(
  '/products',
  upload.single('image'),
  ensureAuthenticateMiddleware,
  editProductController.handle
)
