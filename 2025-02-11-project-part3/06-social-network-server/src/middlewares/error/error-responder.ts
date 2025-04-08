import { NextFunction, Request, Response } from "express";
import TwitterError from "../../errors/twitter-error";
import { StatusCodes } from "http-status-codes";

export default function errorResponder(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error('ErrorResponder Caught:', err)

    const response = {
        success: false,
        message: err.message
    }
    
    if (err instanceof TwitterError) {
        res.status(err.status).json(response)
    } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
    }
}

