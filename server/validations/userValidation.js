const Joi = require('joi')


const joiUserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()/* .email() */.required(),
    password: Joi.string()/* .min(6).max(20) */.required(),
    role: Joi.required()
  });

  module.exports = joiUserSchema;