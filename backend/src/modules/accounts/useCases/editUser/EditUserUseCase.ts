import { AppError } from '../../../../errors/AppError/AppError'
import { UserRepository } from '../../../../repositories/UserRepositories/userRepository'

export type EditUserRequest = {
  id: string
  name: string
  telefone: string
}

export class EditUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ id, name, telefone }: EditUserRequest) {
    const verifyIfUserExist = await this.userRepository.findUserById(id)

    if (!verifyIfUserExist) throw new AppError('Esse usuário não existe.')

    const user = await this.userRepository.update(id, name, telefone)

    return user
  }
}
