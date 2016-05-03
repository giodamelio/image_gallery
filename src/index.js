import Koa from 'koa';
import Router from 'koa-router';

const server = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = 'Hello World!';
});

// Add routes to the server
server.use(router.routes());
server.use(router.allowedMethods());

export default server;
