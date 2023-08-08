import Joi, { ObjectSchema } from 'joi';

const fetchAllUsersSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    //cacheKey: Joi.string(),
    page: Joi.number().allow(null),
    limit: Joi.number().allow(null),
    sortBy: Joi.string().allow(null)
  });

const fetchUserSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    //cacheKey: Joi.string(),
    id: Joi.alternatives(Joi.string(), Joi.number()).required()
  });
const fetchUserProductsSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    //cacheKey: Joi.string(),
    id: Joi.alternatives(Joi.string(), Joi.number()).required()
  });
const fetchUserOrdersSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    //cacheKey: Joi.string(),
    id: Joi.alternatives(Joi.string(), Joi.number()).required()
  });

const addNewUserSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    name: Joi.string().min(3).max(100).required(),
    address: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(1).max(10).required(),
    password: Joi.string().min(1).max(8).required()
  });

const updateUserSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    id: Joi.number().required(),
    name: Joi.string().min(3).max(100),
    address: Joi.string().min(3).max(100),
    email: Joi.string().email(),
    phone: Joi.string().min(1).max(10),
    password: Joi.string().min(1).max(8)
  });

const deleteUserSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    id: Joi.number().required()
  });

export {
  fetchAllUsersSchema,
  fetchUserSchema,
  addNewUserSchema,
  updateUserSchema,
  deleteUserSchema,
  fetchUserProductsSchema,
  fetchUserOrdersSchema
};
