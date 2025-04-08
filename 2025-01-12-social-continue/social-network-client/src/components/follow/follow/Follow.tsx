import User from '../../../models/user/User'
import './Follow.css'
import userPhoto from '../../../assets/images/userPhoto.jpeg'
import following from '../../../services/following'

interface FollowProps {
    user: User
    isAllowActions?: boolean
    onUnFollow?(id: string): void
}

export default function Follow(props: FollowProps): JSX.Element {

    const { name, id } = props.user

    async function handleUnFollow() {
        try {
            await following.unFollow(id)
            console.log(`success`)
            if (props.onUnFollow) {
                props.onUnFollow(id)
            }
        } catch (error) {
            console.log(`unsuccess`, error)
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
                    <button onClick={handleUnFollow}>UnFollow</button>
                </div>
            }
        </div>
    )
}