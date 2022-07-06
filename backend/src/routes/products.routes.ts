import { Router } from "express";
import multer from "multer";
import configMulter from '../config/multer'
import { CreateProductController } from "../modules/product/useCases/createProduct/CreateProductController";

export const productsRouter = Router()

const upload = multer(configMulter);

const createProductController = new CreateProductController()

productsRouter.post('/products', upload.single('image'), createProductController.handle)