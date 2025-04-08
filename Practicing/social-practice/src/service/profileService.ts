import axios from "axios"
import PostModel from "../model/post/PostModel"
import PostDraft from "../model/post/postDraft"

class ProfileService {

    async getProfile(): Promise<PostModel[]> {
        const response = await axios.get<PostModel[]>(`${import.meta.env.VITE_REST_SERVER_URL}/allow/posts`)
        return response.data
    }

    async getPost(id: string): Promise<PostModel> {
        const response = await axios.get<PostModel>(`${import.meta.env.VITE_REST_SERVER_URL}/allow/posts/${id}`)
        return response.data
    }

    async deletePost(postId: string): Promise<boolean>{
        const response = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/allow/posts/${postId}`)
        return response.data
    }

    async createPost(draft: PostDraft): Promise<PostModel> {
        const response = await axios.post<PostModel>(`${import.meta.env.VITE_REST_SERVER_URL}/allow/posts/`, draft)
        return response.data
    }

    async editPost(id: string, draft: PostDraft): Promise<PostModel> {
        const {title, body} = draft
        const response = await axios.patch<PostModel>(`${import.meta.env.VITE_REST_SERVER_URL}/allow/posts/${id}`, {title, body})
        return response.data
    }
}

    

const profileService = new ProfileService()
export default profileService