import { NextFunction, Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import TwitterError from "../errors/twitter-error";


export default function notFound(req: Request, res: Response, next: NextFunction) {
    next(new TwitterError(StatusCodes.NOT_FOUND, 'Page Not Found'))
}