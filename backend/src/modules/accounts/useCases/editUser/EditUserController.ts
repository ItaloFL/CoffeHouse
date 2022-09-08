import { Request, Response } from 'express'
import { PrismaUserRepository } from '../../../../repositories/UserRepositories/prisma/prismaUserRepository'
import { EditUserUseCase } from './EditUserUseCase'

export class EditUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.user
    const { name, telefone } = request.body
    let image = request.file!.filename

    const userRepository = new PrismaUserRepository()
    const editUserUseCase = new EditUserUseCase(userRepository)

    const editedUser = await editUserUseCase.execute({
      id,
      name,
      telefone,
      image
    })

    return editedUser
  }
}
