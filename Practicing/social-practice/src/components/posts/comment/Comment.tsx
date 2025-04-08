import CommentModel from '../../../model/comment/CommentModel'
import './Comment.css'

interface CommentProps {
    comment: CommentModel
}

export default function Comment(props: CommentProps): JSX.Element {

    const {comment: {body, createdAt} } = props
    return (
        <div className='Comment'>
            <div className='commentInfo'> SOMEONE wrote at {createdAt}</div>
            <div className='commentBody'>{body}</div>
        </div>
    )
}