import { User } from '@prisma/client'
import { client } from '../../../database/Prisma/client'
import { UserRepository, UserType } from '../userRepository'

export class PrismaUserRepository implements UserRepository {
  async create({ name, email, telefone, password }: UserType): Promise<User> {
    const user = await client.user.create({
      data: {
        name,
        email,
        telefone,
        password
      }
    })

    return user
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await client.user.findFirst({
      where: {
        email
      }
    })

    return user
  }

  async findUserById(id: string): Promise<User | null> {
    const user = await client.user.findFirst({
      where: {
        id
      }
    })

    return user
  }

  async update(id: string, name?: string, telefone?: string): Promise<User> {
    const user = await client.user.update({
      where: {
        id
      },
      data: {
        name,
        telefone
      }
    })

    return user
  }
}
