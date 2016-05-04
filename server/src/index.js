import path from 'path';

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import koaStatic from 'koa-static';
import bluebird from 'bluebird';
import originalJoi from 'joi';

import listImages from './list_images';

const joi = bluebird.promisifyAll(originalJoi);

// Schema for a new image
const imageSchema = joi.object().keys({
  url: joi.string().required().uri(),
  description: joi.string().empty('').max(255),
});

export default (database) => {
  // Setup our server
  const server = new Koa();
  const router = new Router({
    prefix: '/api',
  });

  // Handle validitation errors
  router.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      if (err.isJoi) {
        ctx.status = 400;
        ctx.body = {
          error: 'Invalid data',
          details: err.details,
        };
      } else {
        // Pass it up the chain
        throw err;
      }
    }
  });

  // List images
  router.get('/images', async (ctx) => {
    ctx.body = await listImages(database);
  });

  // Get image by id
  router.get('/images/:id', async (ctx) => {
    const image = await database.findOneAsync({ _id: ctx.params.id });
    ctx.body = image;
  });

  // Add image
  router.post('/images', async(ctx) => {
    // Validate new image data
    const newImage = await joi.validateAsync(ctx.request.body, imageSchema);

    // Add the image to the database
    const image = await database.insertAsync(newImage);

    ctx.body = image;
  });

  // Middleware

  // Handle unhandled errors
  server.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = 500;
      ctx.body = 'Internal Server Error';
      console.error(err); // eslint-disable-line no-console
    }
  });

  // Parse the json bodies
  server.use(bodyParser());

  // Add routes to the server
  server.use(router.routes());
  server.use(router.allowedMethods());

  // Serve static content
  server.use(koaStatic(path.join(__dirname, '../../client/dist/')));

  return server;
};
