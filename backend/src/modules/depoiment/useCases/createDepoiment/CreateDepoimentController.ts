import { Response, Request } from 'express'
import { prismaDepoimentoRepository } from '../../../../repositories/DepoimentoRepositories/prisma/prismaDepoimentoRepository'
import { PrismaUserRepository } from '../../../../repositories/UserRepositories/prisma/prismaUserRepository'
import { CreateDepoimentUseCase } from './CreateDepoimentUseCase'

export class CreateDepoimentController {
  async handle(request: Request, response: Response) {
    const { id } = request.user
    const { depoimento } = request.body

    const depoimentoRepository = new prismaDepoimentoRepository()
    const userRepository = new PrismaUserRepository()
    const createDepoimentUseCase = new CreateDepoimentUseCase(
      depoimentoRepository,
      userRepository
    )

    const depoiment = await createDepoimentUseCase.execute({
      user: id,
      depoimento
    })

    return response.json(depoiment)
  }
}
