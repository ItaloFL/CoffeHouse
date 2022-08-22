import { Request, Response } from "express";
import { PrismaProductRepository } from "../../../../repositories/ProductRepositories/prisma/prismaProductRepository";
import { EditProductUseCase } from "./EditProductUseCase";



export class EditProductController {

  async handle(request: Request, response: Response){

    const { name, description, price } = request.body;
    const image = request?.file?.filename
    
    const productRepository = new PrismaProductRepository()
    const editProductUseCase = new EditProductUseCase(productRepository)

    const updatedProduct = await editProductUseCase.execute({
      name,
      description,
      price,
      image
    })

    return updatedProduct
  }
}