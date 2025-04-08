import { useEffect, useState } from 'react'
import './FollowersList.css'
import UserModel from '../../../models/user/User'
import followers from '../../../services/followers'
import Follow from '../follow/Follow'

export default function FollowersList(): JSX.Element {
    const [users, setUsers] = useState<UserModel[]>([])

    useEffect(() => {
        followers.getFollowers()
        .then(setUsers)
        .catch(alert)
    }, [])
    return (
       <div className="FollowersList">
                {users.map(f => <Follow 
                key={f.id}
                user={f}
                >
                </Follow>)}
       </div> 
    )
}