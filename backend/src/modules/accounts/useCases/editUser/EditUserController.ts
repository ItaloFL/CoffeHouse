import { Request, Response } from 'express'
import { PrismaUserRepository } from '../../../../repositories/UserRepositories/prisma/prismaUserRepository'
import { EditUserUseCase } from './EditUserUseCase'

export class EditUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.user
    const { name, telefone } = request.body

    const userRepository = new PrismaUserRepository()
    const editUserUseCase = new EditUserUseCase(userRepository)

    const editedUser = await editUserUseCase.execute({
      id,
      name,
      telefone
    })

    return editedUser
  }
}
