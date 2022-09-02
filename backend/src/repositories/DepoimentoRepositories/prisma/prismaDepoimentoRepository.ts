import { Depoimento } from '@prisma/client'
import { DepoimentoRepository } from '../depoimentoRepository'
import { client } from '../../../database/Prisma/client'

export class prismaDepoimentoRepository implements DepoimentoRepository {
  async create({
    user,
    depoimento
  }: {
    user: string
    depoimento: string
  }): Promise<Depoimento> {
    const Depoimento = await client.depoimento.create({
      data: {
        user,
        depoimento
      }
    })

    return Depoimento
  }
}
