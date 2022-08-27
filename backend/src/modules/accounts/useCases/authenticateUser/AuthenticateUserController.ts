import { Request, Response } from 'express'
import { PrismaUserRepository } from '../../../../repositories/UserRepositories/prisma/prismaUserRepository'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    const userRepository = new PrismaUserRepository()
    const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository)

    const token = await authenticateUserUseCase.execute({
      email,
      password
    })

    return response.json({
      token
    })
  }
}
