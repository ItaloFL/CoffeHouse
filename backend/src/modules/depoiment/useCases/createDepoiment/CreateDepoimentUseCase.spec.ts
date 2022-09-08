import { describe, expect, it } from 'vitest'
import { AppError } from '../../../../errors/AppError/AppError'
import { InMemoryDepoimentRepository } from '../../../../repositories/inMemory/InMemoryDepoimentRepository'
import { InMemoryUserRepository } from '../../../../repositories/inMemory/InMemoryUserRepository'
import { CreateUserUseCase } from '../../../accounts/useCases/createUser/CreateUserUseCase'
import { CreateDepoimentUseCase } from './CreateDepoimentUseCase'

describe('Create a depoiment', () => {
  const userRepository = new InMemoryUserRepository()
  const depoiementRepository = new InMemoryDepoimentRepository()
  const createUserUseCase = new CreateUserUseCase(userRepository)
  const createDepoimentUseCase = new CreateDepoimentUseCase(
    depoiementRepository,
    userRepository
  )

  it('should be able to create a new depoiment', async () => {
    const user = await createUserUseCase.execute({
      name: 'testDepoimentUser',
      email: 'test@test.com',
      password: 'testPassword',
      telefone: 'testPhone',
      image: 'testImage'
    })

    const depoimentObeject = await createDepoimentUseCase.execute({
      user: user.id,
      depoimento: 'Gostei Muito'
    })

    expect(depoimentObeject).toHaveProperty('id')
  })

  it('should not be able to create a new depoiment if a user does not exist', async () => {
    await expect(
      createDepoimentUseCase.execute({
        user: 'ErrorId',
        depoimento: 'Gostei Muito'
      })
    ).rejects.toEqual(new AppError('Usúario não encontrado!'))
  })

  it('should not be able to create a new depoiment if he already exist', async () => {
    const user = await createUserUseCase.execute({
      name: 'test2DepoimentUser',
      email: 'test2@test.com',
      password: 'test2Password',
      telefone: 'test2Phone',
      image: 'testImage'
    })

    await expect(
      createDepoimentUseCase.execute({
        user: user.id,
        depoimento: 'Gostei Muito'
      })
    ).rejects.toEqual(new AppError('O depoimento já existe.'))
  })
})
