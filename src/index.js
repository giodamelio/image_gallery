import Koa from 'koa';
import Router from 'koa-router';

import db from './db';

// Setup our server
const server = new Koa();
const router = new Router({
  prefix: '/api',
});

// List images
router.get('/images', async (ctx) => {
  ctx.body = await db.findAsync({});
});

// Add routes to the server
server.use(router.routes());
server.use(router.allowedMethods());

export default server;
