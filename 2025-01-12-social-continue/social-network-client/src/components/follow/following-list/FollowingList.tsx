import { useEffect, useState } from 'react'
import './FollowingList.css'
import UserModel from '../../../models/user/User'
import following from '../../../services/following'
import Follow from '../follow/Follow'

export default function FollowingList(): JSX.Element {
    const [users, setUsers] = useState<UserModel[]>([])

    useEffect(() => {
        following.getFollowing()
        .then(setUsers)
        .catch(alert)
    }, [])

    function handleUnFollow(id: string) {
        setUsers(users.filter(user => user.id === id))
    }

    return (
        <div className="FollowingList">
                {users.map(f => <Follow 
                key={f.id} 
                user={f}
                isAllowActions={true}
                onUnFollow={handleUnFollow}
                >
                </Follow>)}
        </div>
    )
}