import { hash } from 'bcryptjs'
import { UserRepository } from '../../../../repositories/UserRepositories/userRepository'
import { AppError } from '../../../../errors/AppError/AppError'

export type UserType = {
  name: string
  email: string
  telefone: string
  password: string
  image: string
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ name, email, telefone, password, image }: UserType) {
    const user = await this.userRepository.findUserByEmail(email)

    if (user)
      throw new AppError('Já existe um usuário cadastrado com esse Email.')

    const hashPassword = await hash(password, 8)

    const createdUser = await this.userRepository.create({
      name,
      email,
      telefone,
      password: hashPassword,
      image
    })

    return createdUser
  }
}
