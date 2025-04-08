import { Router } from "express";
import { addFurniture, getAll } from "../controllers/furnitures/controller";
import { newItemValidator } from "../controllers/furnitures/validator";
import validation from "../middlewares/validation";
import { getFurnitureTypes } from "../controllers/furnitures/types-controller";

const furnituresRouter = Router()

furnituresRouter.get('/', getAll)
furnituresRouter.get('/types', getFurnitureTypes)
furnituresRouter.post('/', validation(newItemValidator), addFurniture)

export default furnituresRouter