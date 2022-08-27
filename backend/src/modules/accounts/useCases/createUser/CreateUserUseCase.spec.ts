import { describe, expect, it } from 'vitest'
import { AppError } from '../../../../errors/AppError/AppError'
import { InMemoryUserRepository } from '../../../../repositories/inMemory/InMemoryUserRepository'
import { CreateUserUseCase } from './CreateUserUseCase'

describe('Create a User', () => {
  const inMemoryProductRepository = new InMemoryUserRepository()
  const createUserUseCase = new CreateUserUseCase(inMemoryProductRepository)

  it('should be able to create a new user', async () => {
    const user = await createUserUseCase.execute({
      name: 'test',
      email: 'test@test.com',
      password: 'testPassword',
      telefone: 'testPhone'
    })

    expect(user).toHaveProperty('id')
  })

  it('should not be able to create a new user if he already exist', async () => {
    await expect(
      createUserUseCase.execute({
        name: 'test2',
        email: 'test@test.com',
        password: 'testPassword2',
        telefone: 'testPhone2'
      })
    ).rejects.toEqual(new AppError('Já existe um usuário cadastrado com esse Email.'))
  })
})
