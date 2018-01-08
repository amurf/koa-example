#!/usr/bin/env node

'use strict';

const Koa = require('koa');

const bodyParser = require('koa-bodyparser');
const logger     = require('koa-logger');
const session    = require('koa-session');
const cors       = require('kcors');


const config = require('./config');
console.log(config);
const app    = new Koa();

const Router = require('koa-router');
const router = new Router();
router.get('/', (ctx, next) => { ctx.body = {hello: 'world'}; });

// Set middlewares
app
  .use(bodyParser())
  .use(logger())
  .use(cors(config.cors))
  .use(session(config.session, app))
  .use(router.routes())
  .use(router.allowedMethods())
;


const db = require('./db');
db.addClient('abc').then(function() {
  db.getClient(1).then(console.log);
});


// Start server
if (!module.parent) {
  app.listen(config.server.port, config.server.ip, () => {
    console.log(`API server listening on ${config.server.host}:${config.server.port}, in ${config.server.env}`);
  });
}

// Expose app
module.exports = app;
