import { useNavigate } from 'react-router-dom'
import PostModel from '../../../models/post/Post'
import profile from '../../../services/profile'
import './Post.css'
import CommentModel from '../../../models/comment/Comment'
import Comments from '../comments/Comments'

interface PostProps {
    post: PostModel
    isAllowActions?: boolean
    remove?(id: string): void
    addComment(comment: CommentModel): void
}

export default function Post(props: PostProps): JSX.Element {

    
    const { isAllowActions, addComment } = props
    const { title, body, createdAt, id, comments } = props.post
    const { name } = props.post.user

    const navigate = useNavigate()


    async function deleteMe() {
        if (props.remove && confirm(`Are you sure you want to delete "${title}"`)) {
            try {
                await profile.remove(id)
                props.remove(id)
            } catch (error) {
                alert(`Couldn't remove post: ${error}`)
            }
        }
    }

    function editMe() {
       navigate(`/edit/${id}`)
    }


    return (
        <div className='Post'>
            <div>
                {title}
            </div>
            <div>
                {name} at {createdAt}
            </div>
            <div>
                {body}
            </div>
            {isAllowActions &&
                <div>
                    <button>Likes</button>
                    <button onClick={deleteMe}>Delete</button>
                    <button onClick={editMe}>Edit</button>
                    <button>Comments</button>
                </div>
            }
            <Comments 
                comments={comments}
                postId={id}
                addComment={addComment}
            />
            
            
           
            
        </div>
    )
}