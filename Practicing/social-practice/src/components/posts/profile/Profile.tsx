import { useEffect, useState } from 'react'
import profileService from '../../../service/profileService'
import './Profile.css'
import PostModel from '../../../model/post/PostModel'
import Post from '../post/Post'
import NewPost from '../new-post/NewPost'

export default function Profile(): JSX.Element {

    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {
        profileService.getProfile()
            .then(setPosts)
            .catch(alert)
    }, [])

    const removePost = (id: string) => {
        const updatedPosts = posts.filter(post => post.id !== id)
        setPosts(updatedPosts)
    }

    function addPost(newPost: PostModel): void {
        setPosts([newPost, ...posts])
    }

    return (
        <div className='Profile'>
            <div>
                <NewPost 
                addPost={addPost}
                />
            </div>
            <div>
                {posts.map(singlePost => <Post
                    key={singlePost.id}
                    post={singlePost}
                    removePost={removePost}
                />)}
            </div>
        </div>
    )
}