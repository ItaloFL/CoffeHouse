import { User } from '@prisma/client'
import { UserRepository, UserType } from '../UserRepositories/userRepository'
import { v4 } from 'uuid'
import { AppError } from '../../errors/AppError/AppError'

export class InMemoryUserRepository implements UserRepository {
  users: User[] = []

  async create({ name, email, telefone, password }: UserType): Promise<User> {
    const user = {} as User

    Object.assign(user as User, {
      id: user.id ?? v4(),
      name,
      email,
      telefone,
      password
    })

    this.users.push(user)

    return user
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = this.users.find(user => user.email === email)

    return user ?? null
  }

  async findUserById(id: string): Promise<User | null> {
    const user = this.users.find(user => user.id === id)

    return user ?? null
  }

  async update(id: string, name: string, telefone: string): Promise<User> {
    const user = await this.findUserById(id)

    if (!user) {
      throw new AppError('Usuário não encontrado')
    }

    user.name = name ?? user.name
    user.telefone = telefone ?? user.telefone

    return user
  }
}
