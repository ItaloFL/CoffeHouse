import { Product } from '@prisma/client'
import {
  ProductRepository,
  ProductType
} from '../ProductRepositories/productRepository'

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = []

  async create({
    name,
    description,
    price,
    image
  }: ProductType): Promise<Product> {
    const product = {} as Product

    Object.assign(product, {
      name,
      description,
      price,
      image
    })

    return product
  }

  async update({
    name,
    description,
    price,
    image
  }: ProductType): Promise<Product> {
    const product = await this.findProductByName(name)

    if (!product) {
      throw new Error('Produto não encontrado')
    }

    product.name = name ?? product.name
    product.description = description ?? product.description
    product.price = price ?? product.price
    product.image = image ?? product.image

    return product
  }

  async findProductByName(name: string): Promise<Product | undefined> {
    const product = this.products.find(product => product.name === name)

    return product
  }
}
