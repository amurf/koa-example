-- Verify koa-example:client on pg

BEGIN;

SELECT id, name FROM client WHERE FALSE;

ROLLBACK;
