import { DepoimentoRepository } from '../../../../repositories/DepoimentoRepositories/depoimentoRepository'

export class FindDepoimentsUseCase {
  constructor(private depoimentRepository: DepoimentoRepository) {}

  async execute() {
    const repositories = await this.depoimentRepository.findAllDepoiments()

    return repositories
  }
}
