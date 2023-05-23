const Joi = require('joi')


const joiServiceSchema = Joi.object({
    service_name: Joi.string().required(),
    description: Joi.string().required(),

    service_charge: Joi.number().required(),

    image: Joi.string().required(),

});

module.exports = joiServiceSchema;