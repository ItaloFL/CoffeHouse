import { describe, expect, it } from 'vitest'
import { AppError } from '../../../../errors/AppError/AppError'
import { InMemoryProductRepository } from '../../../../repositories/inMemory/InMemoryProductRepository'
import { CreateProductUseCase } from '../createProduct/CreateProductUseCase'
import { EditProductUseCase } from '../editProduct/EditProductUseCase'

describe('Edit a product', () => {
  const inMemoryProductRepository = new InMemoryProductRepository()
  const createProductUseCase = new CreateProductUseCase(
    inMemoryProductRepository
  )
  const editProductUseCase = new EditProductUseCase(inMemoryProductRepository)

  it('should be able to edit a product', async () => {
    const product = await createProductUseCase.execute({
      name: 'testName',
      description: 'testDescription',
      image: 'testImage',
      price: 'testPrice'
    })

    await editProductUseCase.execute({
      name: product.name,
      description: 'testDescriptionModified',
      image: 'testImageModified',
      price: 'testPriceModified'
    })

    expect(product).toMatchObject({
      name: 'testName',
      description: 'testDescriptionModified',
      image: 'testImageModified',
      price: 'testPriceModified'
    })
  })

  it('should not be able to edit a product if he does not exist', async () => {
    await expect(
      editProductUseCase.execute({
        name: 'TestNameFalse',
        description: 'testDescriptionFalse',
        image: 'testImageFalse',
        price: 'testPriceFalse'
      })
    ).rejects.toEqual(new AppError('Produto não encontrado!'))
  })
})
