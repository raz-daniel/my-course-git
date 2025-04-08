import { useForm } from 'react-hook-form'
import './NewPost.css'
import PostDraft from '../../../model/post/postDraft'
import PostModel from '../../../model/post/PostModel'
import profileService from '../../../service/profileService'

interface NewPostProps {
    addPost(post: PostModel): void
}

export default function NewPost(props: NewPostProps): JSX.Element {

    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()

    async function submit(draft: PostDraft) {
        try {
            const newPost = await profileService.createPost(draft)
            reset()
            props.addPost(newPost)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='NewPost'>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='Enter Title...' {...register('title', {
                    required: {
                        value: true,
                        message: `you must provide title`
                    }, minLength: {
                        value: 10,
                        message: `Text must contain at least 10 chars`
                    }
                })} />
                <span>{formState.errors.title?.message}</span>
                <textarea placeholder='Body Content...' {...register('body', {
                    required: {
                        value: true,
                        message: `must provide body`
                    }, minLength: {
                        value: 20,
                        message: `Must contains at least 20 chars`
                    }
                })} />
                <span>{formState.errors.body?.message}</span>
                <button>Add Post</button>

            </form>
        </div>
    )
}