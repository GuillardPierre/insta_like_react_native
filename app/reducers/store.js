import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favoriteSlice'
export default configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
})