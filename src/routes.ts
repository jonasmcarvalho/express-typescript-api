import { Router, Request, Response } from "express";
import ProductRouter from '../src/app/modules/Product/Router';
import DefaultRouter from '../src/app/modules/Default/Router';
import News from '../src/app/modules/News/Router';

class Routes {
  static define(router : Router): Router {
    router.use('/products', ProductRouter)
    router.use('/news', News)
    router.use('/', DefaultRouter)

    return router
  }
}

export default Routes.define(Router())
