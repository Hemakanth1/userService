FROM node:alpine

RUN mkdir -p /app/userService
WORKDIR /app/userService
COPY package*.json /app/userService/
RUN npm install -g sequelize-cli
RUN npm install -g ts-node
RUN npm install


COPY . /app/userService
EXPOSE 80
CMD ["npm", "run", "migrate-and-start"]