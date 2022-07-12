import { Request, Response } from "express";
import { EditProductUseCase } from "./EditProductUseCase";



export class EditProductController {

  async handle(request: Request, response: Response){

    const { name, description, price } = request.body;
    const image = request.file?.filename ?? ''
    
    const editProductUseCase = new EditProductUseCase()

    const updatedProduct = await editProductUseCase.execute({
      name,
      description,
      price,
      image
    })

    return updatedProduct
  }
}