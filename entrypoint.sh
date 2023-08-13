#!/bin/bash

# Wait for MySQL to be ready
until mysql -h"$MYSQL_HOST" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" -e "quit"; do
  echo "Waiting for MySQL..."
  sleep 2
done

# Initialize MySQL database if needed
if [ ! -f /var/lib/mysql/mysql_initialized ]; then
  echo "Initializing MySQL database..."
  mysql -h"$MYSQL_HOST" -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE" < init.sql
  touch /var/lib/mysql/mysql_initialized
fi

# Start the Node.js app
npm run migrate-and-start
