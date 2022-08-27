import { client } from '../../../../database/Prisma/client'
import { AppError } from '../../../../errors/AppError/AppError'
import { ProductRepository } from '../../../../repositories/ProductRepositories/productRepository'
import { ProductType } from '../createProduct/CreateProductUseCase'

export class EditProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({ name, description, price, image }: ProductType) {
    const verifyIfProductExist = await this.productRepository.findProductByName(
      name
    )

    if (!verifyIfProductExist) throw new AppError('Produto não encontrado!')

    const updatedProduct = await this.productRepository.update({
      name,
      description,
      image,
      price
    })

    return updatedProduct
  }
}
