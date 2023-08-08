/* eslint-disable import/no-unresolved */
import { DataTypes } from 'sequelize';
import utilities from 'hemakanth-package-utilities';
import * as dotenv from 'dotenv-flow';

dotenv.config();

const configurations = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  DIALECT: 'mysql'
};

const { dbHelper } = utilities;
const db = dbHelper(configurations);
const User = db.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(1000)
    },
    email: {
      type: DataTypes.STRING(1000)
    },
    phone: {
      type: DataTypes.STRING(1000)
    },
    password: {
      type: DataTypes.STRING(1000)
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  },
  {}
);

// User.sync()
export default User;
