import { Depoimento } from "@prisma/client"

type DepoimentosType = {
  user: string
  depoimento: string
}

export interface DepoimentoRepository {
  create({ user, depoimento }: DepoimentosType): Promise<Depoimento>
}
