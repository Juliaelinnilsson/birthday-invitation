const Joi = require('@hapi/joi');

const registerValidation = (data) => {
  const schema = Joi.object( {
    firstname: Joi.string()
      .min(3)
      .required(),
    lastname: Joi.string()
      .min(3)
      .required(),
    email: Joi.string()
      .min(8)
      .required()
      .email(),
    password: Joi.string()
      .min(8)
      .required()
  });
  return schema.validate(data)
}

const loginValidation = (data) => {
  const schema = Joi.object( {
    email: Joi.string()
      .min(8)
      .required()
      .email(),
    password: Joi.string()
      .min(8)
      .required()
  });
  return schema.validate(data)
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;