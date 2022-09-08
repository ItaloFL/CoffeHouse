import { describe, expect, it } from 'vitest'
import { AppError } from '../../../../errors/AppError/AppError'
import { InMemoryUserRepository } from '../../../../repositories/inMemory/InMemoryUserRepository'
import { CreateUserUseCase } from '../createUser/CreateUserUseCase'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

describe('Authenticate user', () => {
  const inMemoryUserRepository = new InMemoryUserRepository()
  const createUserUseCase = new CreateUserUseCase(inMemoryUserRepository)
  const authenticateUserUseCase = new AuthenticateUserUseCase(
    inMemoryUserRepository
  )

  it('should be able to authenticate a user', async () => {
    await createUserUseCase.execute({
      name: 'test',
      email: 'test@test.com',
      password: 'testPassword',
      telefone: 'testPhone',
      image: 'testImage'
    })

    const login = await authenticateUserUseCase.execute({
      email: 'test@test.com',
      password: 'testPassword'
    })

    expect(login).toHaveProperty('token')
  })

  it('should not be able to authenticate a user if he password is incorrect', async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: 'test@test.com',
        password: 'incorrectPassword'
      })
    ).rejects.toEqual(new AppError('Usuário ou senha incorretos'))
  })

  it('should not be able to authenticate a user if he does not exist', async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: 'incorrectEmail',
        password: 'incorrectPassword'
      })
    ).rejects.toEqual(new AppError('Usuário ou senha incorretos'))
  })
})
