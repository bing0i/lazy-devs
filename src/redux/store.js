import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import categoriesReducer from './slices/categoriesSlice';

const reducer = {
  posts: postsReducer,
  categories: categoriesReducer,
};

const preloadedState = {
  categories: ['data structures', 'sorting algorithms', 'searching algorithms'],
  posts: {
    datastructures: [],
    sortingalgorithms: [],
    searchingalgorithms: [],
  },
};

export default configureStore({
  reducer,
  preloadedState,
});
