import axios from "axios"
import UserModel from "../model/user/UserModel"

class FollowingService {

    async getFollowing(): Promise<UserModel[]> {
        const response = await axios.get<UserModel[]>(`${import.meta.env.VITE_REST_SERVER_URL}/allow/follows/following`)
        return response.data
    }


}

const followingService = new FollowingService()
export default followingService