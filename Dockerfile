FROM node:alpine

RUN mkdir -p /app/userService
WORKDIR /app/userService
COPY package*.json /app/userService/
RUN npm install -g sequelize-cli
RUN npm install -g ts-node
RUN npm install


COPY . /app/userService
EXPOSE 80

# Environment variables for MySQL configuration
ENV MYSQL_HOST=mysql
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=abcd
ENV MYSQL_DATABASE=mydb

# Install MySQL client
RUN apt-get update && apt-get install -y mysql-client

# Set up startup script
COPY entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

# Start the app
CMD ["./entrypoint.sh"]
CMD ["npm", "run", "migrate-and-start"]