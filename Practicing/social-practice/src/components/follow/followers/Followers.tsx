import { useEffect, useState } from 'react'
import './Followers.css'
import UserModel from '../../../model/user/UserModel'
import followersService from '../../../service/followersService'
import logInPlaceHolder from '../../../assets/images/log-in-placeholder.webp'

export default function Followers(): JSX.Element {

    const [followers, setFollowers] = useState<UserModel[]>([])

    useEffect(() => {
        followersService.getFollowers()
            .then(setFollowers)
            .catch(alert)
    }, [])

    return (
        <div className='Followers'>
            <h3>People Who Follow Me</h3>
            <div className='FollowersList'>
                {followers.map(follower =>
                    <div key={follower.id}>
                        <div><img src={logInPlaceHolder} alt="facePhoto" /></div>
                        <div>{follower.name}</div>
                        <div><button>UnFollow</button></div>
                    </div>
                )}
            </div>
        </div>
    )
}