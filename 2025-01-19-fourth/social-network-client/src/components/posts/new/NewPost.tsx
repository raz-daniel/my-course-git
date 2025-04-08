import { useForm } from 'react-hook-form'
import './newPost.css'
import PostDraft from '../../../models/post/PostDrafts'
import profile from '../../../services/profile'
import loadingPhoto from '../../../assets/images/loading.png'
import { useDispatch } from 'react-redux'
import { newPost } from '../../../redux/profileSlice'


export default function NewPost(): JSX.Element {


    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()
    
    const dispatch = useDispatch()

    async function submit(draft: PostDraft) {
        
        try {
            const newPostFromServer = await profile.create(draft)
            reset()
            dispatch(newPost(newPostFromServer))
        } catch (error) {
            alert(`failed to submit: ${error}`)
        } 
    }

    return (
        <div className={'NewPost'}>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='title'  {...register('title', {
                    required: {
                        value: true,
                        message: `you must provide a title`
                    },
                    minLength: {
                        value: 10,
                        message: `title must be 10 chars long`
                    }
                })}/>
                <span className='error'>{ formState.errors.title?.message}</span>
                <textarea placeholder='post body' {...register('body', {
                    required: {
                        value: true,
                        message: `you must provide a body`
                    },
                    minLength: {
                        value: 20,
                        message: `body must be 20 chars long`
                    }
                })}></textarea>
                <span className='error'>{ formState.errors.body?.message}</span>
                {!formState.isSubmitting && <button>Add Post</button>}
                {formState.isSubmitting && <p>posting new post...<i><img src={loadingPhoto} /></i></p>}

            </form>
        </div>
    )
}