import { useEffect, useState } from 'react'
import './Feed.css'
import feed from '../../../services/feed'
import PostModel from '../../../models/post/Post'
import Post from '../post/Post'

export default function Feed(): JSX.Element {

    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {
        feed.getFeed()
            .then(setPosts)
            .catch(alert)
    }, [])

    useEffect(() => {
        document.title = 'SN - Feed'
    }, [])

    return (
        <div className='Feed'>
            {posts.map(p => <Post
                key={p.id}
                post={p}
            />
            
            )}
        </div>
    )
}