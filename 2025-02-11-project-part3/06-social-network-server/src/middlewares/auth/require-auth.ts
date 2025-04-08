import { Request, Response, NextFunction } from 'express'
import TwitterError from '../../errors/twitter-error'
import { StatusCodes } from 'http-status-codes'

export default function requireAuth(req: Request, res: Response, next: NextFunction) {
    if (!req.userId) return next(new TwitterError(StatusCodes.UNAUTHORIZED, 'Authentication Error'))
    next()
}