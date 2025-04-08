import { useEffect, useState } from 'react'
import './Feed.css'
import feed from '../../../services/feed'
import PostModel from '../../../models/post/Post'
import Post from '../post/Post'
import CommentModel from '../../../models/comment/Comment'
import useTitle from '../../../hooks/useTitle'

export default function Feed(): JSX.Element {

    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {
        feed.getFeed()
            .then(setPosts)
            .catch(alert)
    }, [])


    useTitle('SN - Feed')


    function addComment(comment: CommentModel): void {
        const postWithNewComment = [...posts]
        const postToAddCommentTo = postWithNewComment.find(post => post.id === comment.postId)
        if (postToAddCommentTo) {
            postToAddCommentTo.comments.unshift(comment)
        }
        setPosts(postWithNewComment)
    }


    return (
        <div className='Feed'>
            {posts.map(p => <Post
                key={p.id}
                post={p}
                addComment={addComment}

            />

            )}
        </div>
    )
}