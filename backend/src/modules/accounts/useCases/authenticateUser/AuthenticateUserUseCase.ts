import { compare } from 'bcryptjs'
import { client } from '../../../../database/Prisma/client'
import { sign } from 'jsonwebtoken'
import { UserRepository } from '../../../../repositories/UserRepositories/userRepository'

export type AuthenticateUser = {
  email: string
  password: string
}

export class AuthenticateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, password }: AuthenticateUser) {
    const verifyIfUserExist = await this.userRepository.findUserByEmail(email)

    if (!verifyIfUserExist) throw new Error('Usuário ou senha incorretos')

    const verifyIfPasswordIsValid = await compare(
      password,
      verifyIfUserExist.password
    )

    if (!verifyIfPasswordIsValid) throw new Error('Usuário ou senha incorretos')

    const token = sign(
      { id: verifyIfUserExist.id },
      'bff4106dd72767a7b4ace9373108d799',
      {
        subject: verifyIfUserExist.id
      }
    )

    return token
  }
}
