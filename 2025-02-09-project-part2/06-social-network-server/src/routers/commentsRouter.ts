import { Router } from "express";
import { createComment } from "../controllers/comments/controller";

const commentsRouter = Router()

commentsRouter.post('/', createComment)

export default commentsRouter