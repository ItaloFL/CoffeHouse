import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { AppError } from '../errors/AppError/AppError'

type PayLoad = {
  sub: string
}

export function ensureAuthenticateMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization

  if (!authHeader) throw new AppError('Token is missing')

  const [, token] = authHeader.split(' ')

  try {
    const { sub: user_id } = verify(
      token,
      String(process.env.SECRET_KEY_TOKEN)
    ) as PayLoad

    request.user = {
      id: user_id
    }

    next()
  } catch {
    throw new AppError('Token invalido')
  }
}
