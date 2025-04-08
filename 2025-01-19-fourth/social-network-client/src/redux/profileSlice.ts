import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Post from "../models/post/Post"
import Comment from "../models/comment/Comment"

interface ProfileState {
    posts: Post[]
    newestPostId: string | null
}

const initialState: ProfileState = {
    posts: [],
    newestPostId: null
}

export const profileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload
        },
        newPost: (state, action: PayloadAction<Post>) => {
            state.posts = [action.payload, ...state.posts]
            state.newestPostId = action.payload.id
        },
        remove: (state, action: PayloadAction<{id: string}>) => {
            state.posts = state.posts.filter(p => p.id !== action.payload.id)
        },
        update: (state, action: PayloadAction<Post>) => {
            const index = state.posts.findIndex(p => p.id === action.payload.id)
            if (index > -1) {
                state.posts[index] = action.payload
            }
        },
        addComment: (state, action: PayloadAction<Comment>) => {
            state.posts.find(p => p.id === action.payload.postId)?.comments.push(action.payload)
        },
        clearNewPost: (state) => {
            state.newestPostId = null
        }
    }
})

export const {init, newPost, remove, update, addComment, clearNewPost} = profileSlice.actions

export default profileSlice.reducer