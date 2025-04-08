
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { FurnitureType } from "../../enum/furniture-type.enum";


export async function getFurnitureTypes(req: Request, res: Response, next: NextFunction) {
    try {
        const types = Object.values(FurnitureType);
        res.status(StatusCodes.OK).json(types);
    } catch (e) {
        console.error('getFurnitureTypes Error:', e);
        next(new Error('Failed to retrieve furniture types'));
    }
}