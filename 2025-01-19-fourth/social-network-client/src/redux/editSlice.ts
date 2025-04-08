import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import PostDraft from "../models/post/PostDrafts";

interface EditState {
    post: PostDraft
}

const initialState: EditState = {
    post: {
        title: '',
        body: ''
    }
}

export const editSlice = createSlice({
    name: 'Edit',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<PostDraft>) => {
            state.post = action.payload
        }
    }
})

export const {init} = editSlice.actions

export default editSlice.reducer
