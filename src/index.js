import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

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

  // Add image
  router.post('/images', async(ctx) => {
    const image = await database.insertAsync(ctx.request.body);
    ctx.body = image;
  });

  // Middleware
  server.use(bodyParser());

  // Add routes to the server
  server.use(router.routes());
  server.use(router.allowedMethods());

  return server;
};
