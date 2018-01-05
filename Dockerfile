FROM node:alpine

WORKDIR /koa-example
RUN npm install

CMD npm run server
