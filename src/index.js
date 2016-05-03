import Koa from 'koa';

const server = new Koa();

server.use(async (ctx) => {
  ctx.body = 'Hello World!';
});

server.listen(3141);
