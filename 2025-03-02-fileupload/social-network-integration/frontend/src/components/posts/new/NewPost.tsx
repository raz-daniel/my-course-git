import { useForm } from 'react-hook-form'
import './NewPost.css'
import PostDraft from '../../../models/post/PostDrafts'
import loadingPhoto from '../../../assets/images/loading.png'
import { useDispatch } from 'react-redux'
import { newPost, setNewPost } from '../../../redux/profileSlice'
import ProfileService from '../../../services/auth-aware/Profile'
import useService from '../../../hooks/useService'
import { useRef } from 'react'
import { Toast } from 'primereact/toast'


export default function NewPost(): JSX.Element {


    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()
    const toast = useRef<Toast | null>(null)
    const dispatch = useDispatch()
    
    const profile = useService(ProfileService)

    async function submit(draft: PostDraft) {
        
        try {
            const newPostFromServer = await profile.create(draft)
            reset()
            dispatch(setNewPost(true))
            dispatch(newPost(newPostFromServer))
        } catch {
            toast.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: `Failed to Create New Post`,
                life: 3000
            })
        } 
    }

    

    return (
        <div className={`NewPost`}>
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