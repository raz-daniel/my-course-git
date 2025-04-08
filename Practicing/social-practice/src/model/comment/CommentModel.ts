import UserModel from "../user/UserModel"

export default interface CommentModel {
    id: string
    postId: string
    userId: string
    body: string
    createdAt: string
    updatedAt: string
    user: UserModel
}