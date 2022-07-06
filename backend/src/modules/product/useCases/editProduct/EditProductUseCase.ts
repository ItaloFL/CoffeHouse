import { client } from '../../../../database/Prisma/client'
import { ProductType } from '../createProduct/CreateProductUseCase'

export class EditProductUseCase {
  async execute({ name, description, price, image }: ProductType) {

    const verifyIfProductExist = await client.product.findFirst({
      where: {
        name
      }
    })

    if(!verifyIfProductExist) throw new Error('Produto não encontrado!')

    const updatedProduct = await client.product.update({
      where: {
        name
      },
      data: {
        name,
        description,
        price,
        image
      }
    })

    return updatedProduct
  }
}
