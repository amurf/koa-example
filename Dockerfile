FROM node:alpine

WORKDIR /koa-example

ADD . /koa-example
RUN npm install

CMD npm run start
