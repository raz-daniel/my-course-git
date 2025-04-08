import { NextFunction, Response, Request } from "express";
import User from "../../model/user";
import Post from "../../model/post";
import Comment from "../../model/comment";

const postIncludes = {
    include: [
        User,
        {
            model: Comment,
            include: [ User ]
        }
    ]
}


export async function getProfile(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'
        
        const user = await User.findByPk(userId, {
            include: [{
                model: Post,
                ...postIncludes
            }]
        })
        console.log(user.get({ plain: true }))
        res.json(user.posts)

    } catch (err) {
        next(err)
    }
}

export async function getPost(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
        const post = await Post.findByPk(req.params.id, postIncludes)
        res.json(post)
    } catch (error) {
        next(error)
    }

}

export async function deletePost(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
        // const post = await Post.findByPk(req.params.id)
        // await post.destroy()
        const id = req.params.id
        const deletedRows = await Post.destroy({
            where: { id }
        })

        if (deletedRows === 0) return next({
            status: 404,
            message: 'The post you were trying to delete does not exists'
        })

        res.json({
            success: true
        })

    } catch (error) {
        next(error)
    }
}

export async function createPost(req: Request, res: Response, next: NextFunction) {
    try {

        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'
        const post = await Post.create({ ...req.body, userId })
        await post.reload(postIncludes)
        res.json(post)
    } catch (error) {
        next(error)
    }

}

export async function updatePost(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
        const post = await Post.findByPk(req.params.id, postIncludes)
        const { title, body } = req.body
        post.title = title
        post.body = body
        await post.save() //this command generates the actual SQL update
        res.json(post)

    } catch (error) {
        next(error)
    }
}