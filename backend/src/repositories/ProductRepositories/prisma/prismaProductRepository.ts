import { Product } from '@prisma/client'
import { ProductRepository, ProductType } from '../productRepository'
import { client } from '../../../database/Prisma/client'

export class PrismaProductRepository implements ProductRepository {
  async create({
    name,
    description,
    price,
    image
  }: ProductType): Promise<Product> {
    const product = await client.product.create({
      data: {
        name,
        description,
        price,
        image
      }
    })

    return product
  }

  async update({
    name,
    description,
    price,
    image
  }: ProductType): Promise<Product> {
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

  async findProductByName(name: string): Promise<Product | null> {
    const product = await client.product.findFirst({
      where: {
        name
      }
    })

    return product
  }
}
