import './Profile.css'
import { useEffect } from 'react'
import profile from '../../../services/profile'
import Post from '../post/Post'
import NewPost from '../new/NewPost'
import Loading from '../../common/loading/Loading'
import useTitle from '../../../hooks/useTitle'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { init } from '../../../redux/profileSlice'


export default function Profile(): JSX.Element {

    useTitle('SN - Profile')

    const posts = useAppSelector(state => state.profile.posts)
    const newestPostId = useAppSelector(state => state.profile.newestPostId)
    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            try {
                if (posts.length === 0) {
                    const postsFromServer = await profile.getProfile()
                    dispatch(init(postsFromServer))
                }

            } catch (error) {
                alert(error)
            }
        })()
    }, [])

    return (
        <div className='Profile'>

            {posts.length === 0 && <Loading />}

            {posts.length > 0 && <>
                <NewPost />
                {posts.map(p => <Post
                    key={p.id}
                    post={p} //post is coming from the interface of Post...
                    isAllowActions={true}
                    isNew={p.id === newestPostId}
                />
                )}
            </>}
        </div>
    )
}