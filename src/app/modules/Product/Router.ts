import { Request, Response } from 'express'

// const ProductRouter = Router()

async function ProductRouter(request: Request, response: Response)  {
  response.send({
    _id: 'ABC123',
    name: 'Product Name',
    price: 28.90
  }).status(200)
}

export default ProductRouter