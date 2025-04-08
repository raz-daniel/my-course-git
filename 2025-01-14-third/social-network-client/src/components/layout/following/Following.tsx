import FollowingList from '../../follow/following-list/FollowingList'
import './Following.css'

export default function Following(): JSX.Element {

    return (
        <div className='Following'>
            <div>Following</div>
            <FollowingList />
        </div>
    )
}