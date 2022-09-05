import { client } from "../../../../database/Prisma/client"
import { AppError } from "../../../../errors/AppError/AppError"
import { DepoimentoRepository } from "../../../../repositories/DepoimentoRepositories/depoimentoRepository"
import { prismaDepoimentoRepository } from "../../../../repositories/DepoimentoRepositories/prisma/prismaDepoimentoRepository"
import { UserRepository } from "../../../../repositories/UserRepositories/userRepository"

type DepoimentosType = {
  user: string
  depoimento: string
}

export class CreateDepoimentUseCase {
  constructor(
    private depoimentRepository: DepoimentoRepository,
    private userRepository: UserRepository
  ){}
  async execute({ user, depoimento }: DepoimentosType) {

    const verifyIfUserExist = await this.userRepository.findUserById(user)

    if(!verifyIfUserExist) throw new AppError('Usúario não encontrado!')

    const verifyIfDepoimentExist = await this.depoimentRepository.findDepoiment(depoimento)

    if(verifyIfDepoimentExist) throw new AppError('O depoimento já existe.')
    
    const depoiment = await this.depoimentRepository.create({
      user,
      depoimento
    })

    return depoiment
  }
}
