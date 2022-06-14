import { client } from '../../../../database/Prisma/client'
import { hash } from 'bcryptjs'

export type UserType = {
  name: string
  email: string
  telefone: string
  password: string
}

export class CreateUserUseCase {
  async execute({ name, email, telefone, password }: UserType) {
    const user = await client.user.findFirst({
      where: {
        email
      }
    })

    if (user) throw new Error('Já existe um usuário cadastrado com esse Email.')

    const hashPassword = await hash(password, 8)
    
    const createdUser = await client.user.create({
      data: {
        name,
        email,
        telefone,
        password: hashPassword
      }
    })

    return createdUser
  }
}
