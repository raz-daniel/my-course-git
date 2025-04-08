import { useNavigate, useParams } from 'react-router-dom'
import './EditPost.css'
import { useEffect } from 'react'
import profile from '../../../services/profile'
import { useForm } from 'react-hook-form'
import PostDraft from '../../../models/post/PostDrafts'
import { useAppDispatch, useAppSelector, } from '../../../redux/hooks'
import { update } from '../../../redux/profileSlice'


export default function EditPost(): JSX.Element {

    const { id } = useParams<'id'>()
    const post = useAppSelector(state => state.profile.posts.find(p => p.id === id))
    
    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (id && post) {
            const { title, body } = post
            reset({title, body})
        }
    }, [id, post, reset])

    async function submit(draft: PostDraft) {
        try {
            if (id) {
                const newPostFromServer = await profile.update(id, draft)
                dispatch(update(newPostFromServer))
                navigate('/profile')
            }
        } catch (error) {
            alert(`failed to edit: ${error}`)
        }
    }

    return (
        <div className='EditPost'>
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
                })} />
                <span className='error'>{formState.errors.title?.message}</span>
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
                <span className='error'>{formState.errors.body?.message}</span>
                <button>Update Post</button>
            </form>

        </div>
    )
}