import { useEffect, useState } from 'react'
import './Following.css'
import UserModel from '../../../model/user/UserModel'
import followingService from '../../../service/followingService'
import logInPlaceHolder from '../../../assets/images/log-in-placeholder.webp'

export default function Following(): JSX.Element {

    const [followings, setFollowings] = useState<UserModel[]>([])

    useEffect(() => {
        followingService.getFollowing()
        .then(setFollowings)
        .catch(alert)
    },[])

    return (
        <div className='Following'>
            <h3>People I Follow</h3>
            <div className='FollowingList'>
                {followings.map(following => 
                <div key={following.id}>
                    <div><img src={logInPlaceHolder} alt='FacePhoto' /></div>
                    <div>{following.name}</div>
                    <div><button>Unfollow</button></div>
                </div>
                
                )}
        </div>
        </div>
    )
}
