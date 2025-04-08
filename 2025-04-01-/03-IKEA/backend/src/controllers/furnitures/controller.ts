import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/app-error";
import { Furniture, FurnitureModel } from "../../model/furniture";

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const items = await FurnitureModel.find()
        res.status(StatusCodes.OK).json(items.map(item => item.toObject()))
    } catch (e) {
        console.error('getItems Error:', e)
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to retrieve items'))
    }
}

export async function addFurniture(req: Request<{}, {}, Omit<Furniture, 'id'>>, res: Response, next: NextFunction) {
    try {
        const item = new FurnitureModel(req.body)
        await item.save()
        res.status(StatusCodes.CREATED).json(item.toObject())
    } catch (e) {
        console.error('Creating Furniture Error:', e)
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to create furniture'))
    }
}
