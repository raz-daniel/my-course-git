import { useForm } from 'react-hook-form'
import './NewComment.css'
import CommentDraft from '../../../models/comment/CommentDraft'
import commentsService from '../../../services/comments'
import CommentModel from '../../../models/comment/Comment'

interface NewCommentProps {
    postId: string
    addComment(comment:CommentModel): void
}

export default function NewComment(props: NewCommentProps): JSX.Element {

    const {postId, addComment} = props
    const { register, handleSubmit, formState, reset } = useForm<CommentDraft>()

async function submit(draft: CommentDraft) {
    try {
        const newComment = await commentsService.create(postId, draft)
        reset()
        addComment(newComment)
    } catch (error) {
        alert(error)
    }
}

    return (
        <div className='NewComment'>
            <form onSubmit={handleSubmit(submit)}>
                <textarea placeholder='enter comments...' {...register('body', {
                    required: {
                        value: true,
                        message: 'Comment body is mandatory'
                    }, minLength: {
                        value: 20,
                        message: 'Comment must be at least 20 chars long'
                    }
                })}></textarea>
                <span>{formState.errors.body?.message}</span>
                <button>Post Comment</button>
            </form>
        </div>
    )
}