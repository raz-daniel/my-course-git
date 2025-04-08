import Joi from "joi";

export const newItemValidator = Joi.object({
    type: Joi.string().trim().min(3).required(),
    size: Joi.string().trim().min(5).required(),
    color: Joi.string().trim().min(3).required(),
    price: Joi.number().min(0).required()
})