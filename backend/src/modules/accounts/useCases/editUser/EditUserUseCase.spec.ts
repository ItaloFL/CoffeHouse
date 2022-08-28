import { describe, expect, it } from 'vitest'
import { AppError } from '../../../../errors/AppError/AppError'
import { InMemoryUserRepository } from '../../../../repositories/inMemory/InMemoryUserRepository'
import { CreateUserUseCase } from '../createUser/CreateUserUseCase'
import { EditUserUseCase } from './EditUserUseCase'

describe('Edit a user', () => {
  const inMemoryUserRepository = new InMemoryUserRepository()
  const createUserUseCase = new CreateUserUseCase(inMemoryUserRepository)
  const editUserUseCase = new EditUserUseCase(inMemoryUserRepository)

  it('should be able to edit a user', async () => {
    const user = await createUserUseCase.execute({
      name: 'testEdit',
      email: 'testEdit@test.com',
      password: 'testPassword',
      telefone: 'testPhone'
    })

    await editUserUseCase.execute({
      id: user.id,
      name: 'testEditModified',
      telefone: 'testPhoneModified'
    })

    expect(user).toMatchObject({
      name: 'testEditModified',
      telefone: 'testPhoneModified'
    })
  })

  it('should not be able to edit a user if he does not exist', async () => {
    await expect(
      editUserUseCase.execute({
        id: 'test',
        name: 'test',
        telefone: 'test'
      })
    ).rejects.toEqual(new AppError('Esse usuário não existe.'))
  })
})
