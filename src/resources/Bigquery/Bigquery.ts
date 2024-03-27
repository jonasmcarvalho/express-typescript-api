import { BigQuery, JobResponse } from '@google-cloud/bigquery'


export class Bigquery {
  private client: BigQuery
  constructor () {
    this.client = new BigQuery()
  }

  async query(): Promise<Array<string>> {
    const query: string = `select * from bigquery-public-data.bbc_news.fulltext`
    const options = {
      query: query
    }
    const [job]: JobResponse = await this.client.createQueryJob(options)
    console.log(`Job ${job.id} started.`)

    const [rows] = await job.getQueryResults()
    console.log('Rows:', rows.length);
    const response: Array<string> = rows.map((row: any) => row);
    return response
  }
}