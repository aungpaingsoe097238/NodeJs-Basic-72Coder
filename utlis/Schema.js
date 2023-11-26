const Joi = require("joi");

module.exports = {
  Schema: {
    addCategory: Joi.object({
      name: Joi.string().required(),
      image: Joi.string().required(),
      user: Joi.optional(),
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
    PostSchema: Joi.object({
      image: Joi.string().required(),
      category: Joi.string().required(),
      tag: Joi.string().required(),
      title: Joi.string().required(),
      desc: Joi.string().required(),
      user: Joi.optional(),
    }),
    tagSchema: Joi.object({
      image: Joi.string().required(),
      name: Joi.string().required(),
      user: Joi.optional(),
    }),
    commentSchema: Joi.object({
      postId: Joi.string().required(),
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      content: Joi.string().required(),
      user: Joi.optional(),
    }),
    allSchema: {
      id: Joi.object({
        id: Joi.string()
          .regex(/^[0-9a-fA-F]{24}$/)
          .required(),
      }),
      page: Joi.object({
        page: Joi.string().required(),
      }),
      image: Joi.object({
        image: Joi.string().required(),
      }),
    },
  },
};
