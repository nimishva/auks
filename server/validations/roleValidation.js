const Joi = require('joi')


const joiRoleSchema = Joi.object({
  name: Joi.string().required(),
  permissions : Joi.array()
});

module.exports = joiRoleSchema;