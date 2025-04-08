import { useEffect, useState } from 'react'
import './Feed.css'
import feed from '../../../services/feed'
import Post from '../../../models/post/Post'

export default function Feed(): JSX.Element {

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        feed.getFeed()
            .then(setPosts)
            .catch(alert)
    }, [])

    return (
        <div className='Feed'>
            <ul>
                {posts.map(({ id, title, body, imageUrl, comments }) => <li key={id}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    <div><img src={imageUrl} alt={title} /></div>
                    <div>Comments: {comments.length}</div>
                </li>)}
            </ul>
        </div>
    )
}