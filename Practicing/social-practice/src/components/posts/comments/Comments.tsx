import { useEffect, useState } from 'react'
import './Comments.css'
import CommentModel from '../../../model/comment/CommentModel'
import Comment from '../comment/Comment'
import commentsService from '../../../service/commentsService'
import PostModel from '../../../model/post/PostModel'

interface CommentsProps {
    post: PostModel
}

export default function Comments(props: CommentsProps):JSX.Element {

    const {post: {id}} = props
    const [comments, setComments] = useState<CommentModel[]>([])

    useEffect(() => {
        commentsService.getComments(id)
        .then(setComments)
        .catch(alert)
    },[id])    

    return (
        <div className='Comments'>
            {comments.map(singleComment => <Comment 
            key={singleComment.id}
            comment={singleComment}
            />)}
        </div>
    )
}