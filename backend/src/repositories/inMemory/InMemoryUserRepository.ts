import { User } from '@prisma/client'
import { UserRepository, UserType } from '../UserRepositories/userRepository'

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = []

  async create({ name, email, telefone, password }: UserType): Promise<User> {
    const user = {} as User

    Object.assign(user as User, {
      name,
      email,
      telefone,
      password
    })

    return user
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email)

    return user
  }

  async findUserById(id: string): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id)

    return user
  }

  async update(id: string, name: string, telefone: string): Promise<User> {
    const user = await this.findUserById(id)

    if (!user) {
      throw new Error('Usuário não encontrado')
    }

    user.name = name ?? user.name
    user.telefone = telefone ?? user.telefone

    return user
  }
}
