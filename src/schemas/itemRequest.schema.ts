import Joi from "joi";

export const itemRequestSchema = Joi.object<{pokemonId: number}>({
  pokemonId: Joi.number().required(),  
});
