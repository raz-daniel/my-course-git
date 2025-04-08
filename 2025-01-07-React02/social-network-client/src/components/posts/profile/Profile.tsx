import './Profile.css'
import { useEffect, useState } from 'react'
import Post from '../../../models/post/Post'
import profile from '../../../services/profile'

export default function Profile():JSX.Element {

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        profile.getProfile()
        .then(setPosts)
        .catch(alert)
    },[])

    return (
        <div className='Profile'>
            <ul>
                {posts.map(({id, title, body, imageUrl, comments}) => <li key={id}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    <div><img src={imageUrl} alt={title} /></div>
                    <div>Comments: {comments.length}</div>
                    <div className='postComments'>{comments.map(({body}) => <p>{body}</p>)}</div>
                    </li>)}
            </ul>
        </div>
    )
}