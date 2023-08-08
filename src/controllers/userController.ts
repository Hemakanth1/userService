/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import controller from '../controller';
import userValidator from '../validators/userValidator';
import userService from '../services/userService';

const fetchAllUsers = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: userValidator.fetchAllUsers,
    service: userService.fetchAllUsers
  });
};

const fetchUser = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: userValidator.fetchUser,
    service: userService.fetchUser
  });
};

const fetchUserProducts = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: userValidator.fetchUserProducts,
    service: userService.fetchUserProducts
  });
};

const fetchUserOrders = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: userValidator.fetchUserOrders,
    service: userService.fetchUserOrders
  });
};

const createUser = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: userValidator.createUser,
    service: userService.createUser
  });
};

const updateUser = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: userValidator.updateUser,
    service: userService.updateUser
  });
};

const deleteUser = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: userValidator.deleteUser,
    service: userService.deleteUser
  });
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
