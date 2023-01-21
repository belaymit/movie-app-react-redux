import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';

const store = configureStore({
  reducer: {
    items: movieReducer,
  },
});

export default store;
