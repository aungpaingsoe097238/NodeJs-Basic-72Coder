const Joi = require("joi");

module.exports = {
  Schema: {
    addCategory: Joi.object({
      name: Joi.string().required(),
      image: Joi.string().required(),
    }),
  },
};
