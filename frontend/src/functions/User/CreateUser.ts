import api from '../../services/api'
import { endpoints } from '../../services/endpoints'

type ICreateUser = {
  name: string
  email: string
  telefone: string
  password: string
}

export const createUser = async (data: FormData) => {
  const response = await api.post(endpoints.user.create, data)
  return response.data
}
