import { configureStore } from '@reduxjs/toolkit';
import homepageReducer from './Home/HomePageSlice';

const store = configureStore({
  reducer: {
    homepage: homepageReducer,
  },
});

export default store;
