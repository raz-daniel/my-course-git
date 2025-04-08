import { useEffect, useState } from 'react'
import './FollowersList.css'
import User from '../../../models/user/User'
import followers from '../../../services/followers'

export default function FollowersList(): JSX.Element {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        followers.getFollowers()
        .then(setUsers)
        .catch(alert)
    }, [])
    return (
       <div className="FollowersList">
            <ul>
                {users.map(({id, name, username}) => <li key={id}>{name}<br />@{username}</li>)}
            </ul>
       </div> 
    )
}