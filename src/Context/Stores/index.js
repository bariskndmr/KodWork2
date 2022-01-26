import {configureStore} from '@reduxjs/toolkit';
import favoritesReducer from '../Reducers/Favorites';

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
