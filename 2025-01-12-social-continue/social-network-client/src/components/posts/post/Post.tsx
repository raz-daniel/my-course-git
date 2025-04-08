import { useNavigate } from 'react-router-dom'
import PostModel from '../../../models/post/Post'
import profile from '../../../services/profile'
import './Post.css'
import Comments from '../../../models/comment/Comment'
import NewComment from '../../comment/new-comment/NewComment'
import { useState } from 'react'

interface PostProps {
    post: PostModel
    isAllowActions?: boolean
    remove?(id: string): void
}

export default function Post(props: PostProps): JSX.Element {

    
    const { title, body, createdAt, id, comments } = props.post
    const { name } = props.post.user

    const [postComments, setPostComments] = useState<Comments[]>(comments || [])

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

    function addComment(comment: Comments) {
        console.log("New comment received:", comment)
        setPostComments([...postComments, comment])
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
            {props.isAllowActions &&
                <div>
                    <button onClick={deleteMe}>Delete</button>
                    <button onClick={editMe}>Edit</button>
                </div>
            }
            
            <NewComment postId={id} addComment={addComment} />
            <div> You have {comments.length} Comments:</div>
            <div className='Comments'>
                {postComments.map(comment => (
                    <div key={comment.id} className='Comment'>
                        <div>{comment.user.name} at wrote:</div>
                        <div>{comment.body}</div>
                        <div></div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}