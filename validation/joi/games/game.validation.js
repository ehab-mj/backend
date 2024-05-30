import Joi from "joi";

const createGameSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(2).max(1024).required(),
  category: Joi.string().min(2).max(1024).required(),
  rating: Joi.number().min(1).max(5).allow(""),
  discount: Joi.number().min(0).max(100).allow(""),
  price: Joi.number().min(0).max(1000).required(),
  image: Joi.object().keys({
    url: Joi.string().uri({ scheme: ["http", "https"] }),
    alt: Joi.string().min(2).max(256).allow(""),
  }),
  trailer: Joi.string().uri({ scheme: ["http", "https"] }).allow(""),
});

const createGameSchemaValidation = (gameInput) => {
  return createGameSchema.validateAsync(gameInput);
};
export default createGameSchemaValidation;
