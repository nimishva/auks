const Joi = require('joi')


const joiUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.number().required(),
  whatsAppNumber: Joi.number().optional(),
  password: Joi.string().required(),
  // role: Joi.required(),
});

module.exports = joiUserSchema;