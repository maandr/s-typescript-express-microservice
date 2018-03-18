#!/bin/bash

MYSQL_HOST="127.0.0.1"
MYSQL_PORT=3306
MYSQL_CONTAINER_NAME="mysql_dev"
MYSQL_ROOT_PASSWORD="root"

if [ "$(docker ps -a | grep $MYSQL_CONTAINER_NAME)" ]; then
    echo "mysql already up and running."
else
    docker run --name $MYSQL_CONTAINER_NAME -p $MYSQL_PORT:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:latest
    until nc -z -w30 $MYSQL_HOST $MYSQL_PORT
    do
    echo "waiting for database connection..."
    sleep 3
    done
    echo "mysql up and running."
    echo "initializing database and user..."
    docker exec $MYSQL_CONTAINER_NAME /bin/sh -c "mysql -h$MYSQL_HOST -u root -p$MYSQL_ROOT_PASSWORD < ./scripts/sql/entrypoint.sql"
    echo "initialization succeeded."
fi