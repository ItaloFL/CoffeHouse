import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { routes } from './routes/routes'
import cors from 'cors'
import { AppError } from './errors/AppError/AppError'

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.code).json({
        message: err.message
      })
    }

    return response.status(500).json({
      message: `Server Error, ${err.message}`
    })
  }
)

app.listen(3333, () => {
  console.log('Server is running in port 3333')
})
