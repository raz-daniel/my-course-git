import { useForm } from 'react-hook-form'
import './EditPost.css'
import PostDraft from '../../../model/post/postDraft'
import profileService from '../../../service/profileService'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'


export default function EditPost(): JSX.Element {

    const { id } = useParams<'id'>()
    const { register, handleSubmit, reset, formState } = useForm<PostDraft>()
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            profileService.getPost(id)
                .then(reset)
                .catch(alert)
        }
    }, [])

    async function submit(draft: PostDraft) {
        try {
            if (id) {
                await profileService.editPost(id, draft)
                navigate('/profile')
            }
        } catch (error) {
            console.log(error)
        }


    }

    return <div className='EditPost'>
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
            <button>Update Post</button>

        </form>
    </div>
}