import { useEffect, useState } from 'react'
import './FollowersList.css'
import UserModel from '../../../models/user/User'
import followers from '../../../services/followers'
import Follow from '../follow/Follow'
import Loading from '../../common/loading/Loading'

export default function FollowersList(): JSX.Element {
    const [users, setUsers] = useState<UserModel[]>([])

    useEffect(() => {
        followers.getFollowers()
            .then(setUsers)
            .catch(alert)
    }, [])
    return (
        <div className="FollowersList">

            {users.length === 0 && <Loading />}

            {users.length > 0 && <>

                {users.map(f => <Follow
                    key={f.id}
                    user={f}
                >
                </Follow>)}
            </>}
        </div>
    )
}