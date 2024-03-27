import { Request, Response } from 'express'

async function DefaultRouter(req: Request, res: Response)  {
  res.json({
    message: 'Default Route'
  })
}

export default DefaultRouter
