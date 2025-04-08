import User from '../../../models/user/User'
import './Follow.css'
import userPhoto from '../../../assets/images/userPhoto.jpeg'
import following from '../../../services/following'
import LoadingButton from '../../common/loadingButton/LoadingButton'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { unfollow as unfollowNow, follow as followNow } from '../../../redux/followingSlice'


interface FollowProps {
    user: User
}

export default function Follow(props: FollowProps): JSX.Element {

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const { user: { name, id } } = props

    const dispatch = useAppDispatch()
    const isFollowing = useAppSelector(state => state.following.following.findIndex(f => f.id === id) > -1)

    async function unFollow() {
        if (confirm(`are you sure you want to stop following {name}`)) {
            try {
                setIsSubmitting(true)
                await following.unFollow(id)
                dispatch(unfollowNow({userId: id}))
            } catch (error) {
                console.log(`unsuccess`, error)
            } finally {
                setIsSubmitting(false)
            }
        }
        
    }

    async function follow() {
        try {
            setIsSubmitting(true)
            await following.follow(id)
            dispatch(followNow(props.user))
            
        } catch (error) {
            console.log(`unsuccess`, error)
        } finally {
            setIsSubmitting(false)
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
                <div>
                    {isFollowing && <LoadingButton 
                        onClick={unFollow}
                        isSubmitting={isSubmitting}
                        buttonText='Unfollow'
                        loadingText='Unfollowing'
                    />}
                    {!isFollowing && <LoadingButton 
                        onClick={follow}
                        isSubmitting={isSubmitting}
                        buttonText='follow'
                        loadingText='following'
                    />}
                </div>
        </div>
    )
}