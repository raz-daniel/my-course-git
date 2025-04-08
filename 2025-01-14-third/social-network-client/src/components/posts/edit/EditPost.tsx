import { useNavigate, useParams } from 'react-router-dom'
import './EditPost.css'
import { useEffect } from 'react'
import profile from '../../../services/profile'
import { useForm } from 'react-hook-form'
import PostDraft from '../../../models/post/PostDrafts'

export default function EditPost(): JSX.Element {

    const { id } = useParams<'id'>()
    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            profile.getPost(id)
                .then(reset)
                .catch(alert)
        }
    }, [])

    async function submit(draft: PostDraft) {
        try {
            if (id) {
                await profile.update(id, draft)
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