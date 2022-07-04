import { client } from "../../../../database/Prisma/client"

export type ProductType = {
  name: string
  description: string
  price: string
  image: string
}

export class CreateProductUseCase {
  async execute({ name, description, price, image }: ProductType) {

    const verifyIfProductExist = await client.product.findFirst({
      where: {
        name
      }
    })

    if(verifyIfProductExist) throw new Error('Produto já cadastrado!')

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
}
