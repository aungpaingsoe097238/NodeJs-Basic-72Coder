const Joi = require("joi");

module.exports = {
  Schema: {
    addCategory: Joi.object({
      name: Joi.string().required(),
      image: Joi.string().required(),
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
