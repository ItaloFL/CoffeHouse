import { Depoimento } from '@prisma/client'
import { DepoimentoRepository } from '../DepoimentoRepositories/depoimentoRepository'
import { v4 } from 'uuid'

export class InMemoryDepoimentRepository implements DepoimentoRepository {
  
  private depoiments: Depoimento[] = []

  async create({
    user,
    depoimento
  }: {
    user: string
    depoimento: string
  }): Promise<Depoimento> {
    const depoiement = {} as Depoimento

    Object.assign(depoiement, {
      id: depoiement.id ?? v4(),
      user,
      depoimento
    })

    this.depoiments.push(depoiement)

    return depoiement
  }

  async findDepoiment(depoimento: string): Promise<Depoimento | null> {
    const depoiement = this.depoiments.find((depoiement) => depoiement.depoimento === depoimento)
    return depoiement ?? null
  }
}
