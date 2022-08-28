import { Product } from '@prisma/client'
import {
  ProductRepository,
  ProductType
} from '../ProductRepositories/productRepository'
import { v4 } from 'uuid'
import { AppError } from '../../errors/AppError/AppError'

export class InMemoryProductRepository implements ProductRepository {
  products: Product[] = []

  async create({
    name,
    description,
    price,
    image
  }: ProductType): Promise<Product> {
    const product = {} as Product

    Object.assign(product, {
      id: product.id ?? v4(),
      name,
      description,
      price,
      image
    })

    this.products.push(product)

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
      throw new AppError('Produto não encontrado')
    }

    product.name = name ?? product.name
    product.description = description ?? product.description
    product.price = price ?? product.price
    product.image = image ?? product.image

    return product
  }

  async findProductByName(name: string): Promise<Product | null> {
    const product = this.products.find(product => product.name === name)

    return product ?? null
  }
}
