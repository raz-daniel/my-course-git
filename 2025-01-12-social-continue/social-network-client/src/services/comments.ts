import axios from "axios";
import CommentDraft from "../models/comment/CommentDraft";
import Comment from "../models/comment/Comment";

class Comments {

    async create(draft: CommentDraft): Promise<Comment> {

        console.log("Trying to create comment:", draft)
        console.log("URL:", `${import.meta.env.VITE_REST_SERVER_URL}/comment`)
        const response = await axios.post<Comment>(`${import.meta.env.VITE_REST_SERVER_URL}/comments/${draft.postId}`, {body: draft.body})
        return response.data
    }
}

// singleton
const comments = new Comments()
export default comments