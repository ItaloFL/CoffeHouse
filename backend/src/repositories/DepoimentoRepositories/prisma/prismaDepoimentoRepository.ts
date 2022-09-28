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
      },

    })

    return Depoimento
  }

  async findDepoiment(depoimento: string): Promise<Depoimento | null> {
    const depoiment = await client.depoimento.findFirst({
      where: {
        depoimento
      },
    })

    return depoiment
  }
  
  async findAllDepoiments(): Promise<Depoimento[]> {
    const depoiments = await client.depoimento.findMany({
      include: {
        name: {
          select: {
            name: true,
            image: true
          }
        }
      }
    })

    return depoiments
  }
}
