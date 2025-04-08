import { NextFunction, Response, Request } from "express";
import User from "../../model/user";
import Follow from "../../model/follow";


const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

export async function getFollowers(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await User.findByPk(userId, {
            include: [{
                model: User,
                as: 'followers'
            }]
        })

        if (!user) {
            return next({
                status: 404,
                message: 'User Not Found'
            });
        }

        res.json(user?.followers || [])

    } catch (error) {
        next(error)
    }
}

export async function getFollowing(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await User.findByPk(userId, {
            include: [{
                model: User,
                as: 'following'
            }]
        })
        res.json(user?.following || [])
    } catch (error) {
        next(error)
    }
}

export async function followUser(req: Request, res: Response, next: NextFunction) {
    try {
        const follow = await Follow.create({
            followerId: userId,
            followeeId: req.params.id
        })
        res.json(follow)
    } catch (error) {
        next(error)
    }
}

export async function unfollowUser(req: Request, res: Response, next: NextFunction) {
    try {
        const isUnfollow = await Follow.destroy({
            where: {
                followerId: userId,
                followeeId: req.params.id
            }
        })
        if (!isUnfollow) {
            return next({
                status: 404,
                message: 'tried to delete unexisting user'
            })
        }
        res.json({ success: true })


    } catch (error) {
        next(error)
    }
}

// export async function followUser(req: Request, res: Response, next: NextFunction) {
//     try {
//         const followerId = userId
//         const followeeId = req.params.id

//         if (followerId === followeeId) {
//             return next({status: 400, message: "You cannot follow yourself"})
//         }

//         const findUserId = await User.findByPk(followeeId)
//         if (!findUserId) {
//             return next({ status: 404, message: 'User to follow not found'})
//         }

//         const existingBond = await Follow.findOne({
//             where: {
//                 followerId,
//                 followeeId
//             }
//         })

//         if (!existingBond) {
//             next ({status: 400, message: 'You are already following this user!'})
//         }

//         const newFollow = await Follow.create({
//             followerId,
//             followeeId
//         })

//         res.status(201).json(newFollow)
//     } catch (error) {
//         next(error)
//     }
// }

// export async function unfollowUser(req: Request<{id: string}>, res: Response, next: NextFunction) {
//     try {
//         const followerId = userId
//         const followeeId = req.params.id

//         const deleteBond = await Follow.destroy({
//             where: {
//                 followerId,
//                 followeeId
//             }
//         });

//         if (deleteBond === 0) {
//             return next({
//                 status: 404,
//                 message: 'The id of the person you were trying to un follow with do not exists'
//             })
//         }

//         res.status(200).json({ message: "Un followed successfully" });

//     } catch (error) {
//         next(error)
//     }
// }