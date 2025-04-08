import { useEffect, useState } from 'react'
import './FollowingList.css'
import UserModel from '../../../models/user/User'
import following from '../../../services/following'
import Follow from '../follow/Follow'
import Loading from '../../common/loading/Loading'



export default function FollowingList(): JSX.Element {
    const [users, setUsers] = useState<UserModel[]>([])

    useEffect(() => {
        following.getFollowing()
            .then(setUsers)
            .catch(alert)
    }, [])

    function removeFromFollowingList(userId: string) {
        const newFollowing = users.filter(user => user.id !== userId)
        setUsers(newFollowing)
    }

    return (
        <div className="FollowingList">

            {users.length === 0 && <Loading />}

            {users.length > 0 && <>

                {users.map(f => <Follow
                    key={f.id}
                    user={f}
                    isAllowActions={true}
                    removeFromFollowingList={removeFromFollowingList}
                >
                </Follow>)}
            </>}
        </div>
    )
}