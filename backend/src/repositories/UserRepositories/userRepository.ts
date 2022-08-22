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
}
