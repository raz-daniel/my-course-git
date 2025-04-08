import { useEffect, } from 'react'
import './FollowersList.css'
import followers from '../../../services/followers'
import Follow from '../follow/Follow'
import Loading from '../../common/loading/Loading'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/followersSlice'


export default function FollowersList(): JSX.Element {

    const users = useAppSelector(state => state.followers.followers)
    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            try {
                const followersFromServer = await followers.getFollowers()
                dispatch(init(followersFromServer))
            } catch (error) {
                console.log(error)
            }
        })()            
    }, [dispatch])
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