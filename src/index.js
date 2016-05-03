import Koa from 'koa';
import Router from 'koa-router';

export default (database) => {
  // Setup our server
  const server = new Koa();
  const router = new Router({
    prefix: '/api',
  });

  // List images
  router.get('/images', async (ctx) => {
    ctx.body = await database.findAsync({});
  });

  // Add routes to the server
  server.use(router.routes());
  server.use(router.allowedMethods());

  return server;
};
