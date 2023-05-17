const Joi = require('joi')


const joiActionSchema = Joi.object({
  name: Joi.string().required(),
  code : Joi.string().required(),
  endpoint : Joi.string().required(),
  group : Joi.string(),
  default : Joi.string(),
});

module.exports = joiActionSchema;