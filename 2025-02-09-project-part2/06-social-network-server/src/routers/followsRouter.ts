import { Router } from "express";
import { followUser, getFollowers, getFollowing, unfollowUser } from "../controllers/follows/controller";

const followRouter =  Router()

followRouter.get('/followers', getFollowers)
followRouter.get('/following', getFollowing)
followRouter.post('/follow/:id', followUser)
followRouter.post('/unfollow/:id', unfollowUser)

export default followRouter