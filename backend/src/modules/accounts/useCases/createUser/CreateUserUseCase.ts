import { client } from '../../../../database/Prisma/client'
import { hash } from 'bcryptjs'
import { UserRepository } from '../../../../repositories/UserRepositories/userRepository'

export type UserType = {
  name: string
  email: string
  telefone: string
  password: string
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ name, email, telefone, password }: UserType) {
    const user = await this.userRepository.findUserByEmail(email)

    if (user) throw new Error('Já existe um usuário cadastrado com esse Email.')

    const hashPassword = await hash(password, 8)

    const createdUser = await this.userRepository.create({
      name,
      email,
      telefone,
      password
    })

    return createdUser
  }
}
