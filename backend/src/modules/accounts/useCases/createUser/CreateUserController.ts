import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, telefone, password } = request.body

    const createUserUseCase = new CreateUserUseCase()

    const user = await createUserUseCase.execute({
      name,
      email,
      telefone,
      password
    })

    return user
  }
}
