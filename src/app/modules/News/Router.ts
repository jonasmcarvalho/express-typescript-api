import { Job } from '@google-cloud/bigquery'
import { Request, Response } from 'express'
import { Bigquery } from '../../../resources/Bigquery/Bigquery'

async function News(req: Request, res: Response) {
  const bq: Bigquery = new Bigquery()
  const response: Array<string> = await bq.query()
  
  res.send({
    data: response
  }).status(200)
}

export default News