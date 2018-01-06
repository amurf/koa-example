#!/bin/sh

set -e

DB_URI=postgres://postgres:password@postgres:5432/guitarhorse

until psql $DB_URI -c '\l'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

psql $DB_URI < schema.sql

./start.sh
