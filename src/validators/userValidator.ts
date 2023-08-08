/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import { Request } from 'express';
import utilities from 'hemakanth-package-utilities';
const { validate } = utilities;
import {
  fetchAllUsersSchema,
  fetchUserSchema,
  addNewUserSchema,
  updateUserSchema,
  deleteUserSchema,
  fetchUserProductsSchema,
  fetchUserOrdersSchema
} from '../schema/userSchema';

const fetchAllUsers = async (req: Request): Promise<any> => {
  const { page, limit, sortBy } = req.query;

  const attributes = {
    page: page ? parseInt(page.toString(), 10) : null,
    limit: limit ? parseInt(limit.toString(), 10) : null,
    sortBy: sortBy || null
  };

  return validate(fetchAllUsersSchema(), attributes);
};

const fetchUser = async (req: Request): Promise<any> => {
  const attributes = {
    id: Number.isNaN(req.params.id)
      ? req.params.id
      : parseInt(req.params.id, 10)
  };

  return validate(fetchUserSchema(), attributes);
};

const fetchUserProducts = async (req: Request): Promise<any> => {
  const attributes = {
    id: Number.isNaN(req.params.id)
      ? req.params.id
      : parseInt(req.params.id, 10)
  };

  return validate(fetchUserProductsSchema(), attributes);
};
const fetchUserOrders = async (req: Request): Promise<any> => {
  const attributes = {
    id: Number.isNaN(req.params.id)
      ? req.params.id
      : parseInt(req.params.id, 10)
  };

  return validate(fetchUserOrdersSchema(), attributes);
};

const createUser = async (req: Request): Promise<any> => {
  const { name, address, email, phone, password } = req.body;

  const attributes = {
    name,
    address,
    email,
    phone,
    password
  };
  return validate(addNewUserSchema(), attributes);
};

const updateUser = async (req: Request): Promise<any> => {
  const { name, address, email, phone, password } = req.body;

  const attributes = {
    id: parseInt(req.params.id, 10),
    name,
    address,
    email,
    phone,
    password
  };

  return validate(updateUserSchema(), attributes);
};

const deleteUser = async (req: Request): Promise<any> => {
  const attributes = {
    id: parseInt(req.params.id, 10)
  };

  return validate(deleteUserSchema(), attributes);
};

export default {
  fetchAllUsers,
  createUser,
  fetchUser,
  updateUser,
  deleteUser,
  fetchUserProducts,
  fetchUserOrders
};
