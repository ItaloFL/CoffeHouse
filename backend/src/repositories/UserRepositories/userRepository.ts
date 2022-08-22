import { User } from '@prisma/client'

export type UserType = {
  name: string
  email: string
  telefone: string
  password: string
}

export interface UserRepository {
  create({ name, email, telefone, password }: UserType): Promise<User>

  findUserByEmail(email: string): Promise<User | null>

  findUserById(id: string): Promise<User | null>

  update(id: string, name: string, telefone: string): Promise<User>
}
