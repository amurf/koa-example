-- Deploy koa-example:client to pg

BEGIN;

CREATE TABLE client (
  id   SERIAL PRIMARY KEY,
  name TEXT
);

COMMIT;
