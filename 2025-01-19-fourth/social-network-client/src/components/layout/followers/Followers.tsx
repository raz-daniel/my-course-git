import FollowersList from '../../follow/followers-list/FollowersList'
import './Followers.css'

export default function Followers(): JSX.Element {

    return (
        <div className='Followers'>
            <div>Followers</div>
            <FollowersList />
        </div>
    )
}