#!/bin/sh

set -e

until psql $DB_URI -c '\l'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done


sqitch "$@"
