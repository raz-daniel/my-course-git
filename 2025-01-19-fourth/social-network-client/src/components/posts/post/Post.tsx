import { useNavigate } from 'react-router-dom'
import PostModel from '../../../models/post/Post'
import profile from '../../../services/profile'
import './Post.css'
import Comments from '../comments/Comments'
import { useAppDispatch } from '../../../redux/hooks'
import { remove, clearNewPost } from '../../../redux/profileSlice'

interface PostProps {
    post: PostModel
    isAllowActions?: boolean
    isNew?: boolean
}

export default function Post(props: PostProps): JSX.Element {

    const {isNew} = props
    const { title, body, createdAt, id, comments } = props.post
    const { name } = props.post.user

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    async function deleteMe() {
        if (confirm(`Are you sure you want to delete "${title}"`)) {
            try {
                await profile.remove(id)
                dispatch(remove({id}))
            } catch (error) {
                alert(`Couldn't remove post: ${error}`)
            }
        }
    }

    function editMe() {
       navigate(`/edit/${id}`)
    }

    const handleAnimationEnd = () => {
        if (isNew) {
            dispatch(clearNewPost())
        }
    }

    console.log(`Post ${props.isNew ? 'growth' : ''}`, props.isNew)

    return (
        <div className={`Post ${isNew ? 'growth' : ''}`}
        onAnimationEnd={handleAnimationEnd}
    >
            <div>
                {title}
            </div>
            <div>
                {name} at {createdAt}
            </div>
            <div>
                {body}
            </div>
            
                {props.isAllowActions && <>
                    <div>
                    
                    <button onClick={deleteMe}>Delete</button>
                    <button onClick={editMe}>Edit</button>

                </div>
                </>}
            
            <Comments 
                comments={comments}
                postId={id}
            />
            
            
           
            
        </div>
    )
}