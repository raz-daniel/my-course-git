import { useNavigate } from 'react-router-dom'
import PostModel from '../../../model/post/PostModel'
import profileService from '../../../service/profileService'
import Comments from '../comments/Comments'
import './Post.css'

interface PostProps {
    post: PostModel
    removePost(id: string): void
}

export default function Post(props: PostProps): JSX.Element {

    const { post, post: { user: { name }, createdAt, body, id } } = props
    const navigate = useNavigate

    async function removePost() {
        if (confirm(`are you sure?`)) {
            try {
                await profileService.deletePost(id)
                props.removePost(id)
            } catch (error) {
                console.log(error)
            }
        }
    }

    function editPost() {
        navigate(`/edit/${id}`)
    }

    return (
        <div className='Post'>
            <div className="postInfo">{name} wrote at: {createdAt}</div>
            <div className="postBody">{body}</div>
            <div>
                <button>Like</button>
                <button className="editPost" onClick={editPost}>Edit</button>
                <button className="removePost" onClick={removePost}>Remove</button>
                <button>Add Comment</button>
                <button>Show Comments</button>
            </div>
            <div>{props.post.comments.length} Comments </div>
            <div><Comments
                key={id}
                post={post}
            /></div>
        </div>
    )
}