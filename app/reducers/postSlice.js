import { createSlice } from '@reduxjs/toolkit';
import feed from "../../assets/json/feed.json";

const initialState = {
  posts: feed,
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      const exists = state.posts.find(post => post.itemId === action.payload.itemId);
      if (!exists) {
        state.posts.push(action.payload);
      }
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter(post => post.itemId !== action.payload.itemId)
    },
  },
})

export const { addPost, removePost } = postSlice.actions
export default postSlice.reducer