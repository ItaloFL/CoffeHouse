import { Request, Response } from 'express'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    const authenticateUserUseCase = new AuthenticateUserUseCase()

    const user = await authenticateUserUseCase.execute({
      email,
      password
    })

    return response.json(user)
  }
}
