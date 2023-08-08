import * as dotenv from 'dotenv-flow';
dotenv.config();

const configurations = {
  HOST: '0.0.0.0',
  USER: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  DIALECT: 'mysql'
};

export default configurations;
