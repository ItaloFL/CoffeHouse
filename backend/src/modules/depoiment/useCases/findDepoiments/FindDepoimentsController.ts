import { Request, Response } from 'express'
import { FindDepoimentsUseCase } from './FindDepoimentsUseCase'
import { prismaDepoimentoRepository } from '../../../../repositories/DepoimentoRepositories/prisma/prismaDepoimentoRepository'

export class FindDepoimentsController {
  async handle(request: Request, response: Response) {
    const depoimentRepository = new prismaDepoimentoRepository()
    const findDepoimentUseCase = new FindDepoimentsUseCase(depoimentRepository)

    const depoiments = await findDepoimentUseCase.execute()

    return response.json(depoiments)
  }
}
