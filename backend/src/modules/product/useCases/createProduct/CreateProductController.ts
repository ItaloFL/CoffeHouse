import { Request, Response } from 'express'
import { CreateProductUseCase } from './CreateProductUseCase'

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, description, price } = request.body

    const createProductUseCase = new CreateProductUseCase()

    const product = createProductUseCase.execute({
      name,
      description,
      price
    })

    return product
  }
}
