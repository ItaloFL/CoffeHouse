import { Product } from '@prisma/client'

export type ProductType = {
  name: string
  description: string
  price: string
  image: string
}

export interface ProductRepository {
  create({ name, description, price, image }: ProductType): Promise<Product>

  update({ name, description, price, image }: ProductType): Promise<Product>

  findProductByName(name: string): Promise<Product | undefined>
}
