// import express, { Router, Request, Response } from 'express'

// const app = express()
// const route = Router()

// app.use(express.json())

// route.get('/', (req: Request, res: Response) => {
//   res.json({ message: 'hello world with Typescript'})
// })

// app.use(route)

// app.listen(3333, () => console.log('server running on port 3333'))

import { SetupApplication } from "./app";
import 'dotenv/config'

class Server {
  static start(): void {
    const application = new SetupApplication(3333)
    application.init()
    application.start()
  }
}

Server.start()