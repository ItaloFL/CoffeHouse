import { client } from '../../../../database/Prisma/client'
import { AppError } from '../../../../errors/AppError/AppError'
import { ProductRepository } from '../../../../repositories/ProductRepositories/productRepository'

export type ProductType = {
  name: string
  description: string
  price: string
  image: string
}

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({ name, description, price, image }: ProductType) {
    const verifyIfProductExist = await this.productRepository.findProductByName(
      name
    )

    if (verifyIfProductExist) throw new AppError('Produto já cadastrado!')

    const product = await this.productRepository.create({
      name,
      description,
      price,
      image
    })

    return product
  }
}
