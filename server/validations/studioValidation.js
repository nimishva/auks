const Joi = require('joi')


const joiStudioSchema = Joi.object({
    name: Joi.string().required(),
    services: Joi.array().required(),
    website: Joi.string(),
    phone_number: Joi.number(),
    address1: Joi.string().required(),
    address2: Joi.string().required(),
    landmark: Joi.string().required(),
    area: Joi.string().required(),
    city: Joi.string().required(),
    pincode: Joi.number().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
    management_users: Joi.array().required(),
    location_map: Joi.string().optional(),

});

module.exports = joiStudioSchema;