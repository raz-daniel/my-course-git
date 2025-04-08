import { useForm } from 'react-hook-form'
import './NewComment.css'
import CommentDraft from '../../../models/comment/CommentDraft'
import commentsService from '../../../services/comments'
import LoadingButton from '../../common/loadingButton/LoadingButton'
import { useAppDispatch } from '../../../redux/hooks'
import { addComment as addCommentProfile } from '../../../redux/profileSlice'
import { addComment as addCommentFeed } from '../../../redux/feedSlice'

interface NewCommentProps {
    postId: string
}

export default function NewComment(props: NewCommentProps): JSX.Element {

    const { postId } = props
    const { register, handleSubmit, formState, reset } = useForm<CommentDraft>()

    const dispatch = useAppDispatch()

async function submit(draft: CommentDraft) {
    try {
        const newComment = await commentsService.create(postId, draft)
        reset()
        dispatch(addCommentProfile(newComment))
        dispatch(addCommentFeed(newComment))
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
                <LoadingButton 
                    isSubmitting={formState.isSubmitting}
                    buttonText='Post Comment'
                    loadingText='Posting Comment'
                />
            </form>
        </div>
    )
}