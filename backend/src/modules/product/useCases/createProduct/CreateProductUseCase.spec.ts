import { describe, expect, it } from 'vitest'
import { AppError } from '../../../../errors/AppError/AppError'
import { InMemoryProductRepository } from '../../../../repositories/inMemory/InMemoryProductRepository'
import { CreateProductUseCase } from '../createProduct/CreateProductUseCase'

describe('Create a Product', () => {
  const inMemoryProductRepository = new InMemoryProductRepository()
  const createProductUseCase = new CreateProductUseCase(
    inMemoryProductRepository
  )

  it('should be able to create a new product', async () => {
    const product = await createProductUseCase.execute({
      name: 'test',
      description: 'testDescription',
      image: 'testImage',
      price: 'testPrice'
    })

    expect(product).toHaveProperty('id')
  })

  it('should not be able to create a new product if he already exist', async () => {
    await expect(
      createProductUseCase.execute({
        name: 'test',
        description: 'testDescription2',
        image: 'testImage2',
        price: 'testPrice2'
      })
    ).rejects.toEqual(new AppError('Produto já cadastrado!'))
  })
})
