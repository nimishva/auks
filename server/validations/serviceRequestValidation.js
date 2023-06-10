const Joi = require('joi')


const joiServiceRequestSchema = Joi.object({

    service: Joi.objectid(),
    from_user: Joi.string(),
    to_studio: Joi.string(),
    status: Joi.string(),
    qty: Joi.number(),
    image: Joi.string(),
    mail: Joi.string()

});

module.exports = joiServiceRequestSchema;