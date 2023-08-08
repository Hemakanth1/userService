/* eslint-disable import/no-unresolved */
import express, { Router } from 'express';
import userController from '../controllers/userController';

const router: Router = express.Router();

router
  .get('/', userController.fetchAllUsers)
  .post('/', userController.createUser)
  .get('/:id', userController.fetchUser)
  .get('/:id/products', userController.fetchUserProducts)
  .get('/:id/orders', userController.fetchUserOrders)
  .patch('/:id', userController.updateUser)
  .delete('/:id', userController.deleteUser);

export default router;
