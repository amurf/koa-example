-- Revert koa-example:client from pg

BEGIN;

DROP TABLE client;

COMMIT;
