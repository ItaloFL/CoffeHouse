import { Request, Response } from 'express'
import { PrismaUserRepository } from '../../../../repositories/UserRepositories/prisma/prismaUserRepository'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, telefone, password } = request.body
    const image = request.file!.filename

    const userRepository = new PrismaUserRepository()
    const createUserUseCase = new CreateUserUseCase(userRepository)

    const user = await createUserUseCase.execute({
      name,
      email,
      telefone,
      password,
      image: `http://localhost:3333/files/${image}`
    })

    return response.json(user)
  }
}
