import CommentModel from "../comment/CommentModel"
import UserModel from "../user/UserModel"
import PostDraft from "./postDraft"

export default interface PostModel extends PostDraft{
    id: string
    userId: string
    imageUrl: string
    createdAt: string
    updatedAt: string
    comments: CommentModel[]
    user: UserModel
}
