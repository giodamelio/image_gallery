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

  // Get image by id
  router.get('/images/:id', async (ctx) => {
    const image = await database.findOneAsync({ _id: ctx.params.id });
    ctx.body = image;
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
