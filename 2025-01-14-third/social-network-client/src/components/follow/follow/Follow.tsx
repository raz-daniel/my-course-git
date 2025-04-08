import User from '../../../models/user/User'
import './Follow.css'
import userPhoto from '../../../assets/images/userPhoto.jpeg'
import following from '../../../services/following'

interface FollowProps {
    user: User
    isAllowActions?: boolean
    removeFromFollowingList?(userId: string): void
}

export default function Follow(props: FollowProps): JSX.Element {

    const { user: { name, id }, removeFromFollowingList} = props

    async function unFollow() {
        if (removeFromFollowingList && confirm(`are you sure you want to stop following {name}`)) {
            try {
                await following.unFollow(id)
                removeFromFollowingList(id)
            } catch (error) {
                console.log(`unsuccess`, error)
            }
        }
        
    }

    return (
        <div className='Follow'>
            <div>
                <img src={userPhoto} />
            </div>
            <div>
                {name}
            </div>
            {props.isAllowActions &&
                <div>
                    <button onClick={unFollow}>UnFollow</button>
                </div>
            }
        </div>
    )
}