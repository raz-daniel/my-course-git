import { useForm } from 'react-hook-form'
import Comments from '../../../models/comment/Comment'
import './NewComment.css'
import CommentDraft from '../../../models/comment/CommentDraft'
import comments from '../../../services/comments'

interface NewCommentProps {
    postId: string
    addComment(comment: Comments): void
}

export default function NewComment(props: NewCommentProps): JSX.Element {
    const { register, reset, handleSubmit, formState } = useForm<CommentDraft>()

async function submit(draft: CommentDraft) {
    try {
        const commentDraft = {
            ...draft,
            postId: props.postId
        }
        const newComment = await comments.create(commentDraft)
        console.log("Comment created:", newComment)
        reset()
        props.addComment(newComment)
    } catch (error) {
        console.log("Error details:", error)
    }
}

    return (
        <div className='NewComment'>
            <form onSubmit={handleSubmit(submit)}>
                <textarea placeholder='Write a comment' {...register('body', {
                    required: {
                        value: true,
                        message: 'Comment is required'
                    },
                    minLength: {
                        value: 20,
                        message: 'comment must be atleast 20 characters'
                    }
                })} />
                <span className='error'>{formState.errors.body?.message}</span>
                <button>Add Comment</button>
            </form>
        </div>
    )
}