import { useEffect, useState } from 'react'
import './FollowingList.css'
import User from '../../../models/user/User'
import following from '../../../services/following'

export default function FollowingList(): JSX.Element {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        following.getFollowing()
        .then(setUsers)
        .catch(alert)
    }, [])

    return (
        <div className="FollowingList">
            <ul>
                {users.map(({id, name, username}) => <li key={id}>{name}<br />@{username}</li>)}
            </ul>
        </div>
    )
}