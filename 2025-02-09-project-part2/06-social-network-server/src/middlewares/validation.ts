import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export default function validation(validator: ObjectSchema) {

    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            req.body = await validator.validateAsync(req.body) //the first req.body is for transformation and not validation
            next()
        } catch (error) {
            next({
                status: 422, //422 https code for Unprocessable Entity
                message: error.message
            })
        }
    }
}