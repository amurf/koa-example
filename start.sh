#!/bin/sh

docker-compose up -d postgres
docker-compose run sqitch deploy
docker-compose up -d backend
