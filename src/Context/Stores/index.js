import {configureStore} from '@reduxjs/toolkit';
import favoritesReducer from '../Reducers/Favorites';

export const Store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
