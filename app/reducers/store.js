import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favoriteSlice'
import postsReducer from './postSlice'

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
    posts: postsReducer,
  },
})