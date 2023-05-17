const Joi = require('joi')


const joiUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(), 
  password: Joi.string().min(8).max(16).required(),
  role: Joi.required(),
  phone: Joi.number().required()
});

module.exports = joiUserSchema;