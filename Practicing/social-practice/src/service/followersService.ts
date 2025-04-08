import axios from "axios"
import UserModel from "../model/user/UserModel"

class FollowersService {

    async getFollowers(): Promise<UserModel[]> {
        const response = await axios.get<UserModel[]>(`${import.meta.env.VITE_REST_SERVER_URL}/allow/follows/followers`)
        return response.data
    }
}

const followersService = new FollowersService()
export default followersService