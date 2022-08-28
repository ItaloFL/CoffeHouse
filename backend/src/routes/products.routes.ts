import { Router } from 'express'
import multer from 'multer'
import configMulter from '../config/multer'
import { CreateProductController } from '../modules/product/useCases/createProduct/CreateProductController'
import { EditProductController } from '../modules/product/useCases/editProduct/EditProductController'

export const productsRouter = Router()

const upload = multer(configMulter)

const createProductController = new CreateProductController()
const editProductController = new EditProductController()

productsRouter.post(
  '/products',
  upload.single('image'),
  createProductController.handle
)
productsRouter.put(
  '/products',
  upload.single('image'),
  editProductController.handle
)
