import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
}

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.favorites.find(favorite => favorite.itemId === action.payload.itemId);
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(favorite => favorite.itemId !== action.payload.itemId)
    },
  },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer