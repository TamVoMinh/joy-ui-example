import router  from 'koa-joi-router';
import * as  controler from './controler.js';

const routers =  router();
routers.prefix('/entities');
Object.values(controler).map(handler => {
    routers.route(handler);
});

export default routers;