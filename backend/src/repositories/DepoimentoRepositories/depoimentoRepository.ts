import { Depoimento } from "@prisma/client"

type DepoimentosType = {
  user: string
  depoimento: string
}

export interface DepoimentoRepository {
  create({ user, depoimento }: DepoimentosType): Promise<Depoimento>
  findDepoiment(depoimento: string): Promise<Depoimento | null>
  findAllDepoiments(): Promise<Depoimento[]>
}
