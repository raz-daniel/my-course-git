import axios from "axios"
import CommentModel from "../model/comment/CommentModel"

class CommentsService {

    async getComments(postId: string): Promise<CommentModel[]> {
        const response = await axios.get<CommentModel[]>(`${import.meta.env.VITE_REST_SERVER_URL}/allow/comments/${postId}`)
        return response.data
    }


}

const commentsService = new CommentsService()
export default commentsService