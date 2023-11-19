const Joi = require("joi");

module.exports = {
  Schema: {
    addCategory: Joi.object({
      name: Joi.string().required(),
      image: Joi.string().required(),
    }),
    RegisterSchema: Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string(),
      password: Joi.string(),
    }),
    LoginSchema: Joi.object({
      phone: Joi.string().required(),
      password: Joi.string().required(),
    }),
    allSchema: {
      id: Joi.object({
        id: Joi.string()
          .regex(/^[0-9a-fA-F]{24}$/)
          .required(),
      }),
      image: Joi.object({
        image: Joi.string().required(),
      }),
    },
  },
};
