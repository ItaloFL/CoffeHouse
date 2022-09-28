import { Router } from 'express'
import { ensureAuthenticateMiddleware } from '../middleware/ensureAuthenticateMiddleware'
import { CreateDepoimentController } from '../modules/depoiment/useCases/createDepoiment/CreateDepoimentController'
import { FindDepoimentsController } from '../modules/depoiment/useCases/findDepoiments/FindDepoimentsController'

export const depoimentsRoutes = Router()

const createDepoimentController = new CreateDepoimentController()
const findDepoimentsController = new FindDepoimentsController()

depoimentsRoutes.post(
  '/depoiments',
  ensureAuthenticateMiddleware,
  createDepoimentController.handle
)

depoimentsRoutes.get(
  '/depoiments',
  findDepoimentsController.handle
)
