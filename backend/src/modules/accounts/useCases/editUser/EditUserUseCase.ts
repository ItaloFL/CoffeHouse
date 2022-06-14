export type EditUserRequest = {
  name: string
  telefone: string
}

export class EditUserUseCase {
  async execute({ name, telefone }: EditUserRequest) {
    
  }
}
