import { useEffect, } from 'react'
import './FollowingList.css'
import followingService from '../../../services/following'
import Follow from '../follow/Follow'
import Loading from '../../common/loading/Loading'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/followingSlice'



export default function FollowingList(): JSX.Element {
    
    const following = useAppSelector(state => state.following.following)

    const dispatch = useAppDispatch()

    useEffect(() => {

        (async () => {
            try {
                const following = await followingService.getFollowing()
                dispatch(init(following))
            } catch (error) {
                alert(error)
            }
    })()
}, [ dispatch ])


return (
    <div className="FollowingList">

        {following.length === 0 && <Loading />}

        {following.length > 0 && <>

            {following.map(f => <Follow
                key={f.id}
                user={f}
            >
            </Follow>)}
        </>}
    </div>
)
}