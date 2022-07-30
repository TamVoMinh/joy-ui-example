import  Koa  from 'koa';
import  cors  from '@koa/cors';
import routers from './routers.js';
import { responseHandler } from './responseHandler.js';
import { nestedQuery } from './nestedQuery.js';

import { entities } from '../data/schema/index.js';
import config from './config.js';
import DbCreator  from '../data/db.js';

const db = DbCreator(config.db, entities, console)

const app = new  Koa();
app.use(db.middleware);
app.use(responseHandler());
app.use(nestedQuery());
app.use(
    cors({
      origin: '*',
      allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTION']
    })
  );

app.use(routers.middleware());

app.listen(3001,'0.0.0.0', () =>{
    console.log('listen on port 3001 host 0.0.0.0');
});  
  // Expose app
export default app;
  