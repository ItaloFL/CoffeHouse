import { compare } from 'bcryptjs'
import { client } from '../../../../database/Prisma/client'
import { sign } from 'jsonwebtoken'
import { UserRepository } from '../../../../repositories/UserRepositories/userRepository'
import { AppError } from '../../../../errors/AppError/AppError'

export type AuthenticateUser = {
  email: string
  password: string
}

export class AuthenticateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, password }: AuthenticateUser) {
    const verifyIfUserExist = await this.userRepository.findUserByEmail(email)

    if (!verifyIfUserExist) throw new AppError('Usuário ou senha incorretos')

    const verifyIfPasswordIsValid = await compare(
      password,
      verifyIfUserExist.password
    )

    if (!verifyIfPasswordIsValid)
      throw new AppError('Usuário ou senha incorretos')

    const token = sign(
      { id: verifyIfUserExist.id },
      String(process.env.SECRET_KEY_TOKEN),
      {
        subject: verifyIfUserExist.id
      }
    )

    return { token }
  }
}
